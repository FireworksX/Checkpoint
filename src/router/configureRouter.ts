import { routes } from './routes'
import createRouter, { PluginFactory } from 'router5'
import browserPlugin from 'router5-plugin-browser'

export const configureRouter = () => {
  const router = createRouter(routes, {
    allowNotFound: true,
    trailingSlashMode: 'never',
    queryParamsMode: 'default'
  })

  const plugins: PluginFactory[] = [browserPlugin({ useHash: false, mergeState: true, preserveHash: false })]

  router.usePlugin(...plugins)
  router.setDependencies({ routes })

  return router
}
