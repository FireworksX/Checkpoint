import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { getClientIp } from 'request-ip'
import { App } from './App'
import { configureRouter } from './router/configureRouter'
import { serverCookieManager } from './services/cookie/serverCookieManager'
import { AppContext } from 'server'
import ssrPrepass from 'react-ssr-prepass'
import { appConfig } from './data/appConfig'
import { FilledContext } from 'react-helmet-async'
import { createApiClients } from './utils/apiClient/createApiClients'
import { serviceContainer } from './services/ioc/serviceContainer'
import { cacheManager } from './services/cacheManager'
import fetch from 'node-fetch'
import { urqlCacheNotify } from './services/urqlCacheNotify'

export async function render(url: string, ctx: AppContext) {
  let ip = getClientIp(ctx.req)

  if (ip === '::1') {
    ip = '109.124.91.130'
  }

  const { addService } = serviceContainer()

  const urqlCache = urqlCacheNotify()
  addService('urqlCacheNotify', urqlCache)

  const cacheManagerInstance = cacheManager()
  cacheManagerInstance.set('x-user-ip', ip || undefined)
  cacheManagerInstance.set('useragent', ctx.req.useragent)

  const cookieManager = serverCookieManager(ctx.req, ctx.res, appConfig.COOKIE_PREFIX)

  const router = configureRouter(ctx)
  router.start(url)

  const { apiClient, gqlClient, ssrCacheStore } = createApiClients({ cookieManager, ip, fetcher: fetch })

  addService('cacheManager', cacheManagerInstance)
  addService('cookieManager', cookieManager)
  addService('apiClient', apiClient)

  const helmetContext = {} as FilledContext

  const selfCookieLocation = cookieManager.get('mapPosition')

  if (selfCookieLocation) {
    cacheManagerInstance.set('mapPosition', selfCookieLocation)
  }

  const Application = (
    <App router={router} helmetContext={helmetContext} cookieManager={cookieManager} urqlClient={gqlClient} />
  )

  const sheet = new ServerStyleSheet()
  const styledChunks = sheet.collectStyles(Application)

  await ssrPrepass(styledChunks)
  const appHtml = ReactDOMServer.renderToString(styledChunks)

  const ssrCache = ssrCacheStore.extractData()

  const appCache: any = {}
  cacheManagerInstance.forEach((key, value) => (appCache[key] = value))

  const appCacheTags = `
    <script>
      window.__APP__CACHE__ = ${JSON.stringify(appCache)}
    </script>
    <script>
      window.__SSR__CACHE__ = ${JSON.stringify(ssrCache)}
    </script>
  `

  return {
    helmetContext: helmetContext.helmet,
    appHtml,
    appCache,
    ssrCache,
    appCacheTags,
    stylesTags: sheet.getStyleTags()
  }
}
