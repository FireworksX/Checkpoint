import ReactDOM from 'react-dom'
import { App } from './App'
import { configureRouter } from './router/configureRouter'
import { createApiClients } from './utils/createApiClients'

const router = configureRouter()
router.start()

const { urqlClient } = createApiClients('')

ReactDOM.hydrate(<App router={router} urqlClient={urqlClient} />, document.getElementById('app'))
