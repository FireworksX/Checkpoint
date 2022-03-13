import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import nodeFetch from 'node-fetch'
import { App, AppFetcherType } from './App'
import { configureRouter } from './router/configureRouter'
import { serverCookieManager } from './services/cookie/serverCookieManager'
import { AppContext } from 'server'
import ssrPrepass from 'react-ssr-prepass'

export async function render(url: string, ctx: AppContext) {
  const cookieManager = serverCookieManager(ctx.req, ctx.res, 'pl-')
  const router = configureRouter(ctx)
  router.start(url)

  const fetcher: AppFetcherType = (resource, init) =>
    nodeFetch(`${ctx.req.baseUrl}/api${resource}`, init).then(res => res.json())

  const Application = <App router={router} cookieManager={cookieManager} fetcher={fetcher} />

  const sheet = new ServerStyleSheet()
  const styledChunks = sheet.collectStyles(Application)

  await ssrPrepass(styledChunks)

  const appHtml = ReactDOMServer.renderToString(styledChunks)

  return {
    appHtml,
    stylesTags: sheet.getStyleTags()
  }
}
