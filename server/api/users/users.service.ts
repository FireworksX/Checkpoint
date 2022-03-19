import { Response, Request } from 'express'
import { UserInterface } from 'server/interfaces/UserInterface'
const { AUTH_USER_KEY } = require('../auth/auth.service')()
import FileControl from 'server/helpers/fileControl'
import { AppResponse } from 'server/interfaces/Request'
const fileControl: typeof FileControl = require('../../helpers/fileControl')

module.exports = () => {
  const usersTable = fileControl<UserInterface[]>('server/data/users.json')

  const profile = (req: Request, res: AppResponse<UserInterface>) => {
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
