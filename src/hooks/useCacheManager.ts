import { serviceContainer } from '../services/ioc/serviceContainer'

export const useCacheManager = () => {
  const cacheManager = serviceContainer().getService('cacheManager')

  return cacheManager
}
