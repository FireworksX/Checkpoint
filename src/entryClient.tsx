import ReactDOM from 'react-dom'
import { MutableSnapshot } from 'recoil'
import { App, AppFetcherType } from './App'
import { configureRouter } from './router/configureRouter'
import { clientCookieManager } from './services/cookie/clientCookieManager'
import { appConfig } from './data/appConfig'
import 'src/pwa'
import { storeMap, StoreType } from './store'

const cookieManager = clientCookieManager(appConfig.COOKIE_PREFIX)
const router = configureRouter()
router.start()

const fetcher: AppFetcherType = (resource, init) => fetch(`/api${resource}`, init).then(res => res.json())

const appCache = window.__APP__CACHE__
const storeCache = window.__STORE__CACHE__
const cacheManager = new Map()

if (appCache) {
  Object.keys(appCache).forEach(key => cacheManager.set(key, appCache[key]))
}

const initializeRecoilState =
  (initialStoreState: StoreType) =>
  ({ set }: MutableSnapshot) =>
    Object.keys(initialStoreState).map(key => {
      const value = initialStoreState[key]
      const atom = storeMap[key]
      set(atom, value)
    })

const Application = (
  <App
    router={router}
    cookieManager={cookieManager}
    fetcher={fetcher}
    cacheManager={cacheManager}
    initializeState={initializeRecoilState(storeCache)}
  />
)

ReactDOM.hydrate(Application, document.getElementById('app'))
