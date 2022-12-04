import { useCallback, useEffect, useMemo } from 'react'
import { useRoute } from 'react-router5'
import {ROUTE_NAMES, ROUTE_PARAMS} from 'src/router/constants'
import useCookies from './useCookies'
import { Params } from 'router5/dist/types/base'

export type Router = ReturnType<typeof useRouter>

export const useRouter = () => {
  const { route, router } = useRoute()

  const getLastSegment = useCallback((name: string | null | undefined) => {
    return name?.match(/\w+$/)?.[0] || null
  }, [])

  const getParam = useCallback(
    (key: keyof typeof ROUTE_PARAMS) => {
      return route?.params[key]
    },
    [route]
  )

  /*
    Если можно вернуться назад, иначе fallback
   */
  const backSafe = useCallback(
    (fallbackName: string, fallbackParams: Params) => {
      if (router.history.length > 1) {
        router.historyBack()
      }

      if (fallbackName) {
        router.navigate(fallbackName, fallbackParams)
      }
    },
    [router]
  )

  const isActive = (segmentName: keyof typeof ROUTE_NAMES) =>
      Boolean((route.name).match(new RegExp(`(\\.|^)${segmentName}(\\.|$)`)))

  return {
    routerInstance: router,
    getLastSegment,
    getParam,
    back: router.historyBack,
    forward: router.historyForward,
    backSafe,
    isActive,
    route,
    history: [],
    navigate: router.navigate,
  }
}
