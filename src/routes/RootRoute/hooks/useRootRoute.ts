import { useToggle } from 'react-use'
import { useEffect } from 'react'
import { userTokens } from '../../../utils/userTokens'
import { useRouter } from '../../../hooks/useRouter'
import { useLinkConfig } from '../../../widgets/Link/hooks/useLinkConfig'
import { ROUTE_NAMES } from 'src/router/constants'

const currentUser = {}

export const useRootRoute = () => {
  const router = useRouter()
  const [fetching, toggleFetching] = useToggle(true)
  const welcomeLink = useLinkConfig('welcome')
  const mapLink = useLinkConfig('map')
  const lastSegment = router.getLastSegment(router.route.name)

  useEffect(() => {
    if (lastSegment === ROUTE_NAMES.navigation) {
      const accessToken = userTokens().getTokens().accessToken

      if (!accessToken) {
        router.routerInstance.redirect(welcomeLink.link.name, welcomeLink.link.params)
      }

      if (accessToken) {
        router.routerInstance.redirect(mapLink.link.name, mapLink.link.params)
      }
    }
  }, [])

  return {
    fetching
  }
}
