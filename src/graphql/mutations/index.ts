import initSubscribe from './subscribe'
import initUnSubscribe from './unSubscribe'
import initEditUser from './editUser'

export default () => {
  initSubscribe()
  initUnSubscribe()
  initEditUser()
}
