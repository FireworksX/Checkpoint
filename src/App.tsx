import React, { FC } from 'react'
import { RouterProvider } from 'react-router5'
import { MutableSnapshot, RecoilRoot } from 'recoil'
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
  initializeState?: (snapshot: MutableSnapshot) => void
}

export const App: FC<Props> = ({ router, helmetContext, cookieManager, urqlClient, initializeState }) => {
  return (
    <React.StrictMode>
      <HelmetProvider context={helmetContext || {}}>
        <CookieProvider cookieManager={cookieManager}>
          <RouterProvider router={router}>
            <RecoilRoot initializeState={initializeState}>
              <UrqlProvider value={urqlClient}>
                <RootRoute />
              </UrqlProvider>
            </RecoilRoot>
          </RouterProvider>
        </CookieProvider>
      </HelmetProvider>
    </React.StrictMode>
  )
}
