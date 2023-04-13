import { serviceContainer } from '../../../services/ioc/serviceContainer'
import { updatePlacemarksResolver } from './updatePlacemarksResolver'

export default () => {
  const { on } = serviceContainer().getService('urqlCacheNotify')

  on('savePost', updatePlacemarksResolver)
}
