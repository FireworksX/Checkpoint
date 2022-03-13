import { RouterProvider } from 'react-router5'
import { SWRConfig } from 'swr'
import axios from 'axios'
import { StoreProvider } from './store'
import RootRoute from './routes/RootRoute/RootRoute'
import React, { FC } from 'react'
import { DefaultDependencies, Router } from 'router5/dist/types/router'
import { CookieProvider } from './services/cookie/CookieProvider'
import { CookieManager } from './interfaces/CookieManager'
import 'virtual:svg-icons-register'

export type AppFetcherType = (resource: string, init: any) => Promise<unknown>

interface Props {
  router: Router<DefaultDependencies>
  cookieManager: CookieManager
  fetcher: AppFetcherType
}

export const App: FC<Props> = ({ router, cookieManager, fetcher }) => {
  return (
    <React.StrictMode>
      <CookieProvider cookieManager={cookieManager}>
        <RouterProvider router={router}>
          <StoreProvider>
            <SWRConfig
              value={{
                fetcher,
                suspense: true
              }}
            >
              <RootRoute />
            </SWRConfig>
          </StoreProvider>
        </RouterProvider>
      </CookieProvider>
    </React.StrictMode>
  )
}
