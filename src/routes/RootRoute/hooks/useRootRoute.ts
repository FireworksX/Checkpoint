import { userTokens } from '../../../utils/userTokens'
import { useRouter } from '../../../hooks/useRouter'
import { useLinkConfig } from '../../../widgets/Link/hooks/useLinkConfig'
import { ROUTE_NAMES } from 'src/router/constants'
import { useIsomorphicEffect } from 'src/hooks/useIsomorphicEffect'

export const useRootRoute = () => {
  const router = useRouter()
  const welcomeLink = useLinkConfig('welcome')
  const mapLink = useLinkConfig('map')
  const lastSegment = router.getLastSegment(router.route.name)

  useIsomorphicEffect(() => {
    const accessToken = userTokens().getTokens().accessToken

    if (!accessToken) {
      router.routerInstance.redirect(welcomeLink.link.name, welcomeLink.link.params)
      return
    }
    if (lastSegment === ROUTE_NAMES.navigation) {

      if (!accessToken) {
        router.routerInstance.redirect(welcomeLink.link.name, welcomeLink.link.params)
      }

      if (accessToken) {
        router.routerInstance.redirect(mapLink.link.name, mapLink.link.params)
      }
    }
  }, [])
}
