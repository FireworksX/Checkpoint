import { userTokens } from 'src/utils/userTokens'
import { useRouter } from 'src/hooks/useRouter'
import { useLinkConfig } from 'src/widgets/Link/hooks/useLinkConfig'
import { useIsomorphicEffect } from 'src/hooks/useIsomorphicEffect'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser/useCurrentUser'
import { ROUTE_NAMES } from 'src/router/constants'

export const useRootRoute = () => {
  const router = useRouter()
  const welcomeLink = useLinkConfig('welcome')
  const mapLink = useLinkConfig('map')
  const lastSegment = router.getLastSegment(router.route.name)
  const { user } = useCurrentUser()
  const isWelcomePath = router.isActive(ROUTE_NAMES.welcome)

  useIsomorphicEffect(() => {
    const accessToken = userTokens().getTokens().accessToken

    if (!accessToken && !isWelcomePath) {
      router.routerInstance.redirect(welcomeLink.link.name, welcomeLink.link.params)
      return
    }

    if (lastSegment === ROUTE_NAMES.navigation) {
      if (!accessToken || user?.status !== 2) {
        router.routerInstance.redirect(welcomeLink.link.name, welcomeLink.link.params)
        return
      }

      if (accessToken) {
        router.routerInstance.redirect(mapLink.link.name, mapLink.link.params)
        return
      }
    }
  }, [])

  return {
    user,
    isAuth: user?.status === 2
  }
}
