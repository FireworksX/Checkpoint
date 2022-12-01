import { routes } from './routes'
import createRouter, { PluginFactory } from 'router5'
import browserPlugin from 'router5-plugin-browser'
import { redirectPlugin } from './plugins/redirectPlugin'
import { AppContext } from 'server'
import { historyPlugin } from './plugins/historyPlugin'
import { navigationPlugin } from './plugins/navigationPlugin'
import {scrollMiddlewareFactory} from "./plugins/scroll";
import isBrowser from "../utils/isBrowser";
import {transitionRoutePlugin} from "./plugins/transitionRoute";

declare module 'router5' {
  interface PluginFactory {
    (router: Router): Plugin
  }

  export interface AppRouterDependencies {
    routes: Route[]
  }

  interface Router {
    getDependencies(): AppRouterDependencies
  }
}

export const configureRouter = (appCtx?: AppContext) => {
  const router = createRouter(routes, {
    allowNotFound: true,
    trailingSlashMode: 'never',
    queryParamsMode: 'default'
  })

  const plugins: PluginFactory[] = [
    browserPlugin({ useHash: false, mergeState: true, preserveHash: false }),
    redirectPlugin(appCtx),
    historyPlugin(),
    navigationPlugin(),
    transitionRoutePlugin
  ]

  const middlewares = []

  if (isBrowser) {
    middlewares.unshift(scrollMiddlewareFactory)
  }

  router.usePlugin(...plugins)
  router.useMiddleware(...middlewares)
  router.setDependencies({ routes })

  return router
}
