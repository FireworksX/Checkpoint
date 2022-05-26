import { RouterProvider } from 'react-router5'
import { MutableSnapshot, RecoilRoot, RecoilRootProps } from 'recoil'
import { SWRConfig, Cache } from 'swr'
import { FilledContext, HelmetProvider } from 'react-helmet-async'
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
  helmetContext?: FilledContext
  initializeState?: (snapshot: MutableSnapshot) => void
}

export const App: FC<Props> = ({ router, helmetContext, cookieManager, fetcher, cacheManager, initializeState }) => {
  return (
    <React.StrictMode>
      <HelmetProvider context={helmetContext || {}}>
        <CookieProvider cookieManager={cookieManager}>
          <RouterProvider router={router}>
            <RecoilRoot initializeState={initializeState}>
              <SWRConfig
                value={{
                  provider: () => cacheManager,
                  fetcher,
                  suspense: true
                }}
              >
                <RootRoute />
              </SWRConfig>
            </RecoilRoot>
          </RouterProvider>
        </CookieProvider>
      </HelmetProvider>
    </React.StrictMode>
  )
}
