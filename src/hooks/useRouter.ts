import { useCallback, useMemo } from 'react'
import { useRoute } from 'react-router5'
import { ROUTE_PARAMS } from 'src/router/constants'
import isBrowser from '../utils/isBrowser'

export const useRouter = () => {
  const { route, router } = useRoute()

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
      [ROUTE_PARAMS.langSlug]: route?.params?.[ROUTE_PARAMS.langSlug],
      [ROUTE_PARAMS.sportSlug]: route?.params?.[ROUTE_PARAMS.sportSlug]
    }),
    [route]
  )

  return {
    routerInstance: router,
    getLastSegment,
    getParam,
    back,
    ...defaultParams
  }
}
