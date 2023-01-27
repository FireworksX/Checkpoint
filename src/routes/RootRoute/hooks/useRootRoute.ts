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
  const { user, fetching, fullName } = useCurrentUser()
  const isWelcomePath = router.isActive(ROUTE_NAMES.welcome)
  const isValidUser = user?.status === 2

  useIsomorphicEffect(() => {
    if (isWelcomePath && isValidUser) {
      router.routerInstance.redirect(mapLink.link.name, mapLink.link.params)
      return
    }

    if (!isValidUser && !isWelcomePath) {
      router.routerInstance.redirect(welcomeLink.link.name, welcomeLink.link.params)
      return
    }

    if (lastSegment === ROUTE_NAMES.navigation) {
      if (isValidUser) {
        router.routerInstance.redirect(mapLink.link.name, mapLink.link.params)
      } else {
        router.routerInstance.redirect(welcomeLink.link.name, welcomeLink.link.params)
      }
    }
  }, [isWelcomePath, isValidUser, lastSegment])

  return {
    user,
    isAuth: user?.status === 2
  }
}
