import { userTokens } from 'src/utils/userTokens'
import { useRouter } from 'src/hooks/useRouter'
import { useLinkConfig } from 'src/widgets/Link/hooks/useLinkConfig'
import { ROUTE_NAMES } from 'src/router/constants'
import { useIsomorphicEffect } from 'src/hooks/useIsomorphicEffect'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser/useCurrentUser'

export const useRootRoute = () => {
  const router = useRouter()
  const welcomeLink = useLinkConfig('welcome')
  const mapLink = useLinkConfig('map')
  const lastSegment = router.getLastSegment(router.route.name)
  const { user } = useCurrentUser()

  useIsomorphicEffect(() => {
    const accessToken = userTokens().getTokens().accessToken

    if (!accessToken && user?.status === 2) {
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

  return {
    user,
    isAuth: user?.status === 2
  }
}
