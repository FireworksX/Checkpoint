import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import nodeFetch from 'node-fetch'
import { App, AppFetcherType } from './App'
import { configureRouter } from './router/configureRouter'
import { serverCookieManager } from './services/cookie/serverCookieManager'
import { AppContext } from 'server'
import ssrPrepass from 'react-ssr-prepass'
import { appConfig } from './data/appConfig'
import { FilledContext } from 'react-helmet-async'
import { MutableSnapshot, Snapshot } from 'recoil'
import { storeMap, StoreType } from './store'
import { userAgentAtom } from './store/configStore'

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
  const helmetContext = {} as FilledContext
  let storeCache: StoreType = {}

  const initializeState = async (snapshot: MutableSnapshot) => {
    const nodesMap: any = {}
    const promises: Promise<any>[] = []

    for (const node of snapshot.getNodes_UNSTABLE()) {
      promises.push(snapshot.getPromise(node))
    }

    const results = await Promise.all(promises)

    let index = 0
    for (const node of snapshot.getNodes_UNSTABLE()) {
      nodesMap[node.key] = results[index]

      index++
    }

    nodesMap[userAgentAtom.key] = ctx.req.useragent

    storeCache = nodesMap
  }

  const Application = (
    <App
      router={router}
      helmetContext={helmetContext}
      cookieManager={cookieManager}
      fetcher={fetcher}
      cacheManager={cacheManager}
      initializeState={initializeState}
    />
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

  const storeCacheTags = `
    <script>
      window.__STORE__CACHE__ = ${JSON.stringify(storeCache)}
    </script>
  `

  return {
    helmetContext: helmetContext.helmet,
    appHtml,
    appCache,
    appCacheTags,
    stylesTags: sheet.getStyleTags(),
    storeCacheTags,
    storeCache
  }
}
