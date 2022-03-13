import ReactDOM from 'react-dom'
import { App, AppFetcherType } from './App'
import { configureRouter } from './router/configureRouter'
import { clientCookieManager } from './services/cookie/clientCookieManager'

const cookieManager = clientCookieManager('pl-')
const router = configureRouter()
router.start()

const fetcher: AppFetcherType = (resource, init) => fetch(`/api${resource}`, init).then(res => res.json())

const appCache = window.__APP__CACHE__
const cacheManager = new Map()

if (appCache) {
  Object.keys(appCache).forEach(key => cacheManager.set(key, appCache[key]))
}

ReactDOM.hydrate(
  <App router={router} cookieManager={cookieManager} fetcher={fetcher} cacheManager={cacheManager} />,
  document.getElementById('app')
)
