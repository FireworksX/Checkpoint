import { routes } from './routes'
import createRouter, { PluginFactory } from 'router5'
import browserPlugin from 'router5-plugin-browser'
import { redirectPlugin } from './plugins/redirectPlugin'
import { AppContext } from 'server'

export const configureRouter = (appCtx?: AppContext) => {
  const router = createRouter(routes, {
    allowNotFound: true,
    trailingSlashMode: 'never',
    queryParamsMode: 'default'
  })

  const plugins: PluginFactory[] = [
    browserPlugin({ useHash: false, mergeState: true, preserveHash: false }),
    redirectPlugin(appCtx)
  ]

  router.usePlugin(...plugins)
  router.setDependencies({ routes })

  return router
}
