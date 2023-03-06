import { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { useRouter } from 'src/hooks/useRouter'
import { useLinkConfig } from 'src/widgets/Link/hooks/useLinkConfig'
import { useIsomorphicEffect } from 'src/hooks/useIsomorphicEffect'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser/useCurrentUser'
import { ROUTE_NAMES } from 'src/router/constants'
import { mapInstanceAtom, mapPositionAtom } from 'src/store/mapStore'

export const useRootRoute = () => {
  const router = useRouter()
  const [welcomeLink] = useLinkConfig('welcome')
  const [mapLink] = useLinkConfig('map')
  const lastSegment = router.getLastSegment(router.route.name)
  const { user } = useCurrentUser()
  const mapInstance = useStore(mapInstanceAtom)
  const isWelcomePath = router.isActive(ROUTE_NAMES.welcome)
  const isValidUser = user?.status === 2

  useEffect(() => {
    if (user && mapInstance) {
      mapPositionAtom.set({
        ...mapPositionAtom.get(),
        zoom: user?.mapZoom,
        center: user?.mapCenter
      })

      if (user?.mapCenter) {
        mapInstance?.setCenter(user?.mapCenter)
      }

      if (user?.mapZoom) {
        mapInstance?.setZoom(user?.mapZoom)
      }
    }
  }, [mapInstance])

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
