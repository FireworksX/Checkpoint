import { createProxyMiddleware } from 'http-proxy-middleware'
import dotenv from 'dotenv'
import { FilledContext } from 'react-helmet-async'
import { Request, Response } from 'express'
import { CacheEntityKey } from '../src/services/cacheManager'
import fs from 'fs'
import path from 'path'
import express from 'express'
import compression from 'compression'
import serverStatic from 'serve-static'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import useragent from 'express-useragent'
import { createServer as viteCreateServer } from 'vite'
import { fileURLToPath } from 'url'

dotenv.config()
dotenv.config({
  path: '.env.local'
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD
const port = process.env.VITE_PORT || 3000

declare global {
  interface Window {
    __APP__CACHE__: Record<CacheEntityKey, any>
    __SSR__CACHE__: Record<string, any>
    __STORE__CACHE__: any
  }
}

export interface AppContext {
  redirect?: {
    path?: string
    status?: number
  }
  req: Request
  res: Response
}

export const gqlProxy = createProxyMiddleware({
  target: process.env.VITE_GQL_PATH,
  changeOrigin: true,
  logLevel: process.env.NODE_ENV !== 'production' ? 'debug' : 'error',
  pathRewrite: { '^/graphql': '' }
})

export const apiProxy = createProxyMiddleware({
  target: process.env.VITE_SERVER_PATH,
  changeOrigin: true,
  logLevel: process.env.NODE_ENV !== 'production' ? 'debug' : 'error',
  pathRewrite: { '^/api': '' }
})

async function createServer(root = process.cwd(), isProd = process.env.NODE_ENV === 'production') {
  const resolve = (p: string) => path.resolve(__dirname, p)

  const indexProd = isProd ? fs.readFileSync(resolve('../dist/client/index.html'), 'utf-8') : ''

  const app = express()

  app.use('/api', apiProxy)
  app.use('/graphql', gqlProxy)

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(useragent.express())
  app.use(cookieParser(process.env.COOKIE_SALT))

  let vite: any
  if (!isProd) {
    vite = await viteCreateServer({
      root,
      logLevel: isTest ? 'error' : 'info',
      server: {
        middlewareMode: 'ssr',
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100
        }
      }
    })
    // use vite's connect instance as middleware
    app.use(vite?.middlewares)
  } else {
    app.use(compression())
    app.use(
      serverStatic(resolve('../dist/client'), {
        index: false
      })
    )
  }

  app.use('*', async (req: any, res: any) => {
    try {
      const url = req.originalUrl

      let template, render
      if (!isProd && vite) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve('../index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entryServer.tsx')).render
      } else {
        template = indexProd
        // @ts-ignore
        render = (await import('../dist/server/entryServer.js')).render //require('../dist/server/entryServer.js').render
      }

      const context: AppContext = {
        req,
        res,
        redirect: {
          path: undefined,
          status: 301
        }
      }
      const { appHtml, stylesTags, appCacheTags, helmetContext } = await render(url, context)

      const { bodyAttributes, htmlAttributes, noscript, meta, ...helmet } = helmetContext as FilledContext['helmet']

      if (context.redirect?.path) {
        // Somewhere a `<Redirect>` was rendered
        return res.redirect(context.redirect?.status || 301, context.redirect?.path)
      }

      const html = template
        .replace(`app-html-attrs`, htmlAttributes.toString())
        .replace(`<!--app-meta-->`, meta.toString())
        .replace(
          `<!--app-helmet-->`,
          Object.values(helmet)
            .map(datum => datum.toString())
            .join('')
        )
        .replace(`app-body-attrs`, bodyAttributes.toString())
        .replace(`<!--app-noscript-->`, noscript.toString())
        .replace(`<!--app-html-->`, appHtml)
        .replace(`<!--app-styles-->`, stylesTags)
        .replace(`<!--app-cache-->`, appCacheTags)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e: any) {
      !isProd && vite && vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

  return { app, vite }
}

if (!isTest) {
  createServer().then(({ app }) =>
    app.listen(port, () => {
      console.log(`http://localhost:${port}`)
    })
  )
}
