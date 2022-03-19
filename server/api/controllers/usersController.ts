import FileControl from '../../helpers/fileControl'
const fileControl: typeof FileControl = require('../../helpers/fileControl')
import { UserInterface } from '../../interfaces/UserInterface'

module.exports = () => {
  const usersTable = fileControl<UserInterface[]>('server/data/users.json')

  const getUserByLogin = (userLogin: string): UserInterface | undefined => {
    return usersTable.getFileData().find(({ login }) => login === userLogin)
  }

  const getUserById = (userId: string): UserInterface | undefined => {
    return usersTable.getFileData().find(({ id }) => id === userId)
  }

  return {
    getUserByLogin,
    getUserById
  }
}
