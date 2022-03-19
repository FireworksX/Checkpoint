import { RouterProvider } from 'react-router5'
import { RecoilRoot } from 'recoil'
import { SWRConfig, Cache } from 'swr'
import axios from 'axios'
import { StoreProvider } from './store'
import RootRoute from './routes/RootRoute/RootRoute'
import React, { FC } from 'react'
import { DefaultDependencies, Router } from 'router5/dist/types/router'
import { CookieProvider } from './services/cookie/CookieProvider'
import { CookieManager } from './interfaces/CookieManager'
import 'virtual:svg-icons-register'
import isBrowser from 'src/utils/isBrowser'

export type AppFetcherType = (resource: string, init: any) => Promise<unknown>

interface Props {
  router: Router<DefaultDependencies>
  cookieManager: CookieManager
  fetcher: AppFetcherType
  cacheManager: Cache
}

export const App: FC<Props> = ({ router, cookieManager, fetcher, cacheManager }) => {
  return (
    <React.StrictMode>
      <CookieProvider cookieManager={cookieManager}>
        <RouterProvider router={router}>
          <RecoilRoot>
            <StoreProvider>
              <SWRConfig
                value={{
                  provider: () => cacheManager,
                  fetcher,
                  suspense: !isBrowser
                }}
              >
                <RootRoute />
              </SWRConfig>
            </StoreProvider>
          </RecoilRoot>
        </RouterProvider>
      </CookieProvider>
    </React.StrictMode>
  )
}
