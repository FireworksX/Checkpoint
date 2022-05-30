import ReactDOM from 'react-dom'
import { App, AppFetcherType } from './App'
import { configureRouter } from './router/configureRouter'
import { clientCookieManager } from './services/cookie/clientCookieManager'
import { appConfig } from './data/appConfig'
import 'src/pwa'
import { createApiClients } from './utils/createApiClients'
import { serviceContainer } from './services/ioc/serviceContainer'
import { cacheManager } from './services/cacheManager'

const { addService } = serviceContainer()

const cookieManager = clientCookieManager(appConfig.COOKIE_PREFIX)
const router = configureRouter()
router.start()

const { apiClient } = createApiClients({ cookieManager })

const fetcher: AppFetcherType = (resource) => apiClient.get<any>(resource).then(({ data }) => data)

const cacheManagerInstance = cacheManager()

addService('cacheManager', cacheManagerInstance)
addService('cookieManager', cookieManager)
addService('apiClient', apiClient)
addService('fetcher', fetcher)

const appCache = window.__APP__CACHE__

if (appCache) {
  Object.keys(appCache).forEach(key => cacheManagerInstance.set(key, appCache[key]))
}

const Application = (
  <App router={router} cookieManager={cookieManager} fetcher={fetcher} cacheManager={cacheManagerInstance} />
)

ReactDOM.hydrate(Application, document.getElementById('app'))
