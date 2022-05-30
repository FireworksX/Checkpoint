import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { App, AppFetcherType } from './App'
import { configureRouter } from './router/configureRouter'
import { serverCookieManager } from './services/cookie/serverCookieManager'
import { AppContext } from 'server'
import ssrPrepass from 'react-ssr-prepass'
import { appConfig } from './data/appConfig'
import { FilledContext } from 'react-helmet-async'
import { createApiClients } from './utils/createApiClients'
import { serviceContainer } from './services/ioc/serviceContainer'
import { cacheManager } from './services/cacheManager'

export async function render(url: string, ctx: AppContext) {
  const { addService } = serviceContainer()
  const cacheManagerInstance = cacheManager()

  const cookieManager = serverCookieManager(ctx.req, ctx.res, appConfig.COOKIE_PREFIX)

  const router = configureRouter(ctx)
  router.start(url)

  const { apiClient } = createApiClients({ cookieManager })

  const fetcher: AppFetcherType = resource =>
    apiClient
      .get<any>(resource)
      .then(({ data }) => data)
      .catch(e => {
        return Promise.resolve({
          success: false,
          error: e
        })
      })

  addService('cacheManager', cacheManagerInstance)
  addService('cookieManager', cookieManager)
  addService('apiClient', apiClient)
  addService('fetcher', fetcher)

  const helmetContext = {} as FilledContext

  const Application = (
    <App
      router={router}
      helmetContext={helmetContext}
      cookieManager={cookieManager}
      fetcher={fetcher}
      cacheManager={cacheManagerInstance}
    />
  )

  const sheet = new ServerStyleSheet()
  const styledChunks = sheet.collectStyles(Application)

  await ssrPrepass(styledChunks)
  const appHtml = ReactDOMServer.renderToString(styledChunks)

  const appCache: any = {}
  cacheManagerInstance.forEach((value, key) => (appCache[key] = value))

  const appCacheTags = `
    <script>
      window.__APP__CACHE__ = ${JSON.stringify(appCache)}
    </script>
  `

  return {
    helmetContext: helmetContext.helmet,
    appHtml,
    appCache,
    appCacheTags,
    stylesTags: sheet.getStyleTags()
  }
}
