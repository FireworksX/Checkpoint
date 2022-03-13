import { Response, Request } from 'express'
import { UserInterface } from '../auth/auth.service'
import { fileControl } from '../../helpers/fileControl'
const { AUTH_USER_KEY } = require('../auth/auth.service')()

module.exports = () => {
  const usersTable = fileControl<UserInterface[]>('server/data/users.json')

  const profile = (req: Request, res: Response) => {
    const currentUser = req.cookies[AUTH_USER_KEY]

    if (currentUser) {
      const users = usersTable.getFileData()
      const findUser = users.find(({ login }) => login === currentUser)

      if (findUser) {
        return res.json({
          success: true,
          data: findUser
        })
      }
    }

    return res.json({
      success: false
    })
  }

  return {
    profile
  }
}
