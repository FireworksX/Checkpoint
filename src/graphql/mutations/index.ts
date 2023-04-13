import initSubscribe from './subscribe'
import initUnSubscribe from './unSubscribe'
import initEditUser from './editUser'
import initSavePost from './savePost'

export default () => {
  initSubscribe()
  initUnSubscribe()
  initEditUser()
  initSavePost()
}
