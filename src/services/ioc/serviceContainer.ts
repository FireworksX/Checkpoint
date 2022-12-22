import { CookieManager } from 'src/interfaces/CookieManager'
import { ApiClient } from 'src/utils/apiClient/createApiClients'
import { CacheManager } from 'src/services/cacheManager'
import {UrqlCacheNotify} from "../urqlCacheNotify";

interface Services {
  cookieManager: CookieManager
  cacheManager: CacheManager
  apiClient: ApiClient
  urqlCacheNotify: UrqlCacheNotify
}

const serviceMap = new Map<keyof Services, any>()

export const serviceContainer = () => {
  const addService = <P extends keyof Services>(serviceName: P, instance: Services[P]) => {
    serviceMap.set(serviceName, instance)
  }

  const getService = <P extends keyof Services>(serviceName: P): Services[P] => serviceMap.get(serviceName)

  return {
    serviceMap,
    addService,
    getService
  }
}
