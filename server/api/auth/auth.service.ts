import { Request, Response } from 'express'
import { fileControl } from '../../helpers/fileControl'

export interface UserInterface {
  email: string
  login: string
  password: string
  bio?: string
}


module.exports = () => {
  const AUTH_USER_KEY = 'pl-profile'
  const usersTable = fileControl<UserInterface[]>('server/data/users.json')

  const register = (req: Request, res: Response) => {
    setTimeout(() => {
      res.json({ status: 'ok' })
    }, 1000)
  }

  const login = (req: Request, res: Response) => {
    const { login, password } = req.body
    const users = usersTable.getFileData()

    const findUser = users.find(user => user.login === login)

    if (findUser && findUser.password === password) {
      res.cookie(AUTH_USER_KEY, findUser.login)
      return res.json({ success: true, data: findUser })
    }

    return res.json({ success: false })
  }

  return {
    AUTH_USER_KEY,
    register,
    login
  }
}
