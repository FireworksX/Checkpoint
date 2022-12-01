import {MiddlewareFactory} from "router5/dist/types/router";
import {transitionRoutePlugin} from "./transitionRoute";

declare module 'router5' {
  interface AppRouterDependencies {
    scroll?: number | null
  }
}

export const scrollMiddlewareFactory: MiddlewareFactory = router => {
  const scrollHistory = new Map<string, number>()

  if (!router.getPlugins().includes(transitionRoutePlugin)) {
    throw new Error('Please, apply transition route plugin before scroll middleware')
  }

  const handleTransition = () => {
    const state = router.getState()
    const transitionState = router.transitionState

    const currentPath = state?.path
    const transitionPath = transitionState?.path
    const transitionSource = transitionState?.meta?.source
    const skipRestoration = transitionState?.meta?.options?.skipRestoration

    if (currentPath) {
      scrollHistory.set(currentPath, window.pageYOffset)
    }

    if (currentPath === transitionPath || (skipRestoration && transitionSource !== 'popstate')) {
      router.setDependency('scroll', null)
    } else {
      const historyOffset = scrollHistory.get(transitionPath || '')

      if (transitionSource === 'popstate' && typeof historyOffset === 'number') {
        router.setDependency('scroll', historyOffset)
      } else {
        router.setDependency('scroll', 0)
      }
    }
  }

  return () => {
    handleTransition()
    return true
  }
}
