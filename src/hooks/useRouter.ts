import { useCallback, useEffect, useMemo } from 'react'
import { useRoute } from 'react-router5'
import { ROUTE_PARAMS } from 'src/router/constants'
import isBrowser from 'src/utils/isBrowser'
import useCookies from './useCookies'

export const useRouter = () => {
  const { route, router } = useRoute()
  const [cookieCitySlug, setCookieCitySlug] = useCookies('citySlug')

  const back = () => isBrowser && window.history.back()

  const getLastSegment = useCallback((name: string | null | undefined) => {
    return name?.match(/\w+$/)?.[0] || null
  }, [])

  const getParam = useCallback(
    (key: keyof typeof ROUTE_PARAMS) => {
      return route?.params[key]
    },
    [route]
  )

  const defaultParams = useMemo(
    () => ({
      [ROUTE_PARAMS.citySlug]:
        route?.params?.[ROUTE_PARAMS.citySlug] ?? (cookieCitySlug === 'undefined' ? undefined : cookieCitySlug),
      [ROUTE_PARAMS.locationSlug]:
        route?.params?.[ROUTE_PARAMS.locationSlug]
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
    back,
    route,
    ...defaultParams
  }
}
