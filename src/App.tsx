import { RouterProvider } from 'react-router5'
import { StoreProvider } from './store'
import { Client, Provider } from 'urql'
import RootRoute from './routes/RootRoute/RootRoute'
import React, { FC } from 'react'
import { DefaultDependencies, Router } from 'router5/dist/types/router'

interface Props {
  router: Router<DefaultDependencies>
  urqlClient: Client
}

export const App: FC<Props> = ({ router, urqlClient }) => {
  return (
    <React.StrictMode>
      <RouterProvider router={router}>
        <StoreProvider>
          <Provider value={urqlClient}>
            <RootRoute />
          </Provider>
        </StoreProvider>
      </RouterProvider>
    </React.StrictMode>
  )
}
