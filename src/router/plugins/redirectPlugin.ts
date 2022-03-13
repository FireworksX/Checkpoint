import { PluginFactory, Router } from 'router5'
import isBrowser from 'src/utils/isBrowser'
import { DoneFn, Params } from 'router5/dist/types/base'
import { AppContext } from '../../../server'

declare module 'router5' {
  interface Router {
    redirect(routeName: string, routeParams?: Params, redirectStatus?: number): void
  }
}

export const redirectPlugin =
  (ctx?: AppContext): PluginFactory =>
  router => {
    const onStart = () => {
      if (router) {
        router.redirect = (routeName, routeParams, redirectStatus = 302) => {
          if (isBrowser) {
            router.navigate(routeName, routeParams || {}, { replace: true })
          } else {
            if (ctx?.redirect) {
              ctx.redirect.path = router.buildPath(routeName, routeParams)
              ctx.redirect.status = redirectStatus
            }
            router.cancel()
          }
        }
      }
    }

    return { onStart }
  }
