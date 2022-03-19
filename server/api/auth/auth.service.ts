import { Request, Response } from 'express'
import { UserInterface } from 'server/interfaces/UserInterface'
import FileControl from 'server/helpers/fileControl'
import { AppResponse } from 'server/interfaces/Request'
const fileControl: typeof FileControl = require('../../helpers/fileControl')

module.exports = () => {
  const AUTH_USER_KEY = 'pl-profile'
  const usersTable = fileControl<UserInterface[]>('server/data/users.json')

  // const register = (req: Request, res: AppResponse<any>) => {
  //   setTimeout(() => {
  //     res.json({ status: 'ok' })
  //   }, 1000)
  // }

  const login = (req: Request, res: AppResponse<UserInterface>) => {
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
    // register,
    login
  }
}
