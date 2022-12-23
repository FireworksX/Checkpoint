import { serviceContainer } from '../../../services/ioc/serviceContainer'
import { updateUserInfoResolver } from './updateUserInfoResolver'

export default () => {
  const { on } = serviceContainer().getService('urqlCacheNotify')

  on('editUser', updateUserInfoResolver)
}
