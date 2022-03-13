import ReactDOM from 'react-dom'
import { App, AppFetcherType } from './App'
import { configureRouter } from './router/configureRouter'
import { clientCookieManager } from './services/cookie/clientCookieManager'

const cookieManager = clientCookieManager('pl-')
const router = configureRouter()
router.start()

const fetcher: AppFetcherType = (resource, init) => fetch(`/api${resource}`, init).then(res => res.json())

ReactDOM.hydrate(
  <App router={router} cookieManager={cookieManager} fetcher={fetcher} />,
  document.getElementById('app')
)
