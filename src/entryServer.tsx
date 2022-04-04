import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import nodeFetch from 'node-fetch'
import { App, AppFetcherType } from './App'
import { configureRouter } from './router/configureRouter'
import { serverCookieManager } from './services/cookie/serverCookieManager'
import { AppContext } from 'server'
import ssrPrepass from 'react-ssr-prepass'
import { appConfig } from './data/appConfig'

export async function render(url: string, ctx: AppContext) {
  const cookieManager = serverCookieManager(ctx.req, ctx.res, appConfig.COOKIE_PREFIX)
  const router = configureRouter(ctx)
  router.start(url)

  const fetcher: AppFetcherType = (resource, init) =>
    nodeFetch(`${ctx.req.protocol}://${ctx.req.header('host')}/api${resource}`, {
      headers: {
        cookie: cookieManager.getAllByString()
      }
    }).then(res => res.json())

  const cacheManager = new Map()

  const Application = (
    <App router={router} cookieManager={cookieManager} fetcher={fetcher} cacheManager={cacheManager} />
  )

  const sheet = new ServerStyleSheet()
  const styledChunks = sheet.collectStyles(Application)

  await ssrPrepass(styledChunks)
  const appHtml = ReactDOMServer.renderToString(styledChunks)

  const appCache: any = {}
  cacheManager.forEach((value, key) => (appCache[key] = value))

  const appCacheTags = `
    <script>
      window.__APP__CACHE__ = ${JSON.stringify(appCache)}
    </script>
  `

  return {
    appHtml,
    appCache,
    appCacheTags,
    stylesTags: sheet.getStyleTags()
  }
}
