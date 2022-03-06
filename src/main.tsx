import React from 'react'
import ReactDOM from 'react-dom'
import RootRoute from './routes/RootRoute/RootRoute'
import 'virtual:svg-icons-register'
import { configureRouter } from 'src/router/configureRouter'
import { RouterProvider } from 'react-router5'
import { Provider } from 'urql'
import { createApiClients } from './utils/createApiClients'
import { StoreProvider } from './store'

const router = configureRouter()
router.start()

const { urqlClient } = createApiClients('')

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <StoreProvider>
        <Provider value={urqlClient}>
          <RootRoute />
        </Provider>
      </StoreProvider>
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
