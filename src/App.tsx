import React, { FC } from 'react'
import { RouterProvider } from 'react-router5'
import { Client, Provider as UrqlProvider } from 'urql'
import { FilledContext, HelmetProvider } from 'react-helmet-async'
import RootRoute from './routes/RootRoute/RootRoute'

import { DefaultDependencies, Router } from 'router5/dist/types/router'
import { CookieProvider } from './services/cookie/CookieProvider'
import { CookieManager } from './interfaces/CookieManager'
import 'virtual:svg-icons-register'

interface Props {
  router: Router<DefaultDependencies>
  cookieManager: CookieManager
  urqlClient: Client
  helmetContext?: FilledContext
  initializeState?: (snapshot: any) => void
}

export const App: FC<Props> = ({ router, helmetContext, cookieManager, urqlClient, initializeState }) => {
  return (
    <React.StrictMode>
      <HelmetProvider context={helmetContext || {}}>
        <CookieProvider cookieManager={cookieManager}>
          <RouterProvider router={router}>
            <UrqlProvider value={urqlClient}>
              <RootRoute />
            </UrqlProvider>
          </RouterProvider>
        </CookieProvider>
      </HelmetProvider>
    </React.StrictMode>
  )
}
