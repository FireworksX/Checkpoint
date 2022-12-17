import ReactDOM from 'react-dom'
import { App } from './App'
import { configureRouter } from './router/configureRouter'
import { clientCookieManager } from './services/cookie/clientCookieManager'
import { appConfig } from './data/appConfig'
import 'src/pwa'
import { createApiClients } from './utils/apiClient/createApiClients'
import { serviceContainer } from './services/ioc/serviceContainer'
import { CacheEntityKey, cacheManager } from './services/cacheManager'

const { addService } = serviceContainer()
const cacheManagerInstance = cacheManager()
const cookieManager = clientCookieManager(appConfig.COOKIE_PREFIX)

addService('cacheManager', cacheManagerInstance)
addService('cookieManager', cookieManager)

const appCache = window.__APP__CACHE__
const ssrCache = window.__SSR__CACHE__

if (appCache) {
  Object.keys(appCache).forEach(key => cacheManagerInstance.set(key as CacheEntityKey, appCache[key as CacheEntityKey]))
}

const router = configureRouter()
router.start()

const { apiClient, gqlClient } = createApiClients({ cookieManager, ssrCache, fetcher: fetch })

addService('apiClient', apiClient)

const Application = <App router={router} cookieManager={cookieManager} urqlClient={gqlClient} />

ReactDOM.hydrate(Application, document.getElementById('app'))
