import { useCallback, useEffect, useMemo } from 'react'
import { useRoute } from 'react-router5'
import { ROUTE_PARAMS } from 'src/router/constants'
import useCookies from './useCookies'
import { Params } from 'router5/dist/types/base'

export const useRouter = () => {
  const { route, router } = useRoute()
  const [cookieCitySlug, setCookieCitySlug] = useCookies('citySlug')

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

  const defaultParams = useMemo(
    () => ({
      [ROUTE_PARAMS.citySlug]:
        route?.params?.[ROUTE_PARAMS.citySlug] ?? (cookieCitySlug === 'undefined' ? undefined : cookieCitySlug),
      [ROUTE_PARAMS.locationSlug]: route?.params?.[ROUTE_PARAMS.locationSlug]
    }),
    [route, cookieCitySlug]
  )

  useEffect(() => {
    if (route.params[ROUTE_PARAMS.citySlug]) {
      setCookieCitySlug(route.params[ROUTE_PARAMS.citySlug])
    }
  }, [route.params[ROUTE_PARAMS.citySlug]])

  return {
    routerInstance: router,
    getLastSegment,
    getParam,
    back: router.historyBack,
    forward: router.historyForward,
    backSafe,
    route,
    history: [],
    ...defaultParams
  }
}
