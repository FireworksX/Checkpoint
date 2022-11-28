import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES, ROUTE_PARAMS } from 'src/router/constants'
import { useRouter } from 'src/hooks/useRouter'
import Redirect from 'src/components/Redirect/Redirect'
import { useLinkConfig } from 'src/widgets/Link/hooks/useLinkConfig'
import { buildName } from 'src/utils/buildName'
import ProfileSettingsModal from 'src/modals/ProfileSettingsModal/ProfileSettingsModal'
import LocationFieldsModal from 'src/modals/LocationFieldsModal/LocationFieldsModal'
import LocationKitchenTypesModal from 'src/modals/LocationKitchenTypesModal/LocationKitchenTypesModal'
import SuccessCreateLocationModal from 'src/modals/SuccessCreateLocationModal/SuccessCreateLocationModal'
import LocationViewOptionsModal from 'src/modals/LocationViewOptionsModal/LocationViewOptionsModal'
import PreRemoveLocationModal from 'src/modals/PreRemoveLocationModal/PreRemoveLocationModal'
import LocationPreloadModal from 'src/modals/LocationPreloadModal/LocationPreloadModal'
import { hasNavigationAtom } from '../../store/uiStore'
import PostPreviewModal from '../../modals/PostPreviewModal/PostPreviewModal'
import CreatePostModal from '../../modals/CreatePostModal/CreatePostModal'

interface NavigationRouteProps {
  className?: string
}

const NavigationRoute: FC<NavigationRouteProps> = ({ className, children }) => {
  const { citySlug, getParam, route } = useRouter()
  const hasNavigation = useRecoilValue(hasNavigationAtom)
  const paramCitySlug = getParam(ROUTE_PARAMS.citySlug)
  const isNavigationRoute = route.name === buildName(ROUTE_NAMES.navigation)

  const { link: cityListLink } = useLinkConfig('cityList')
  const { link: cityInfoLink, routeParams } = useLinkConfig('cityInfo', { citySlug: citySlug || 'empty' })

  if (isNavigationRoute) {
    if (!citySlug) {
      return <Redirect routeName={cityListLink.name} />
    } else if (citySlug && !paramCitySlug) {
      return <Redirect routeName={cityInfoLink.name} params={routeParams} />
    }
  }

  return (
    <Styled.Root className={className}>
      {children}
      <Styled.Navigation hasNavigation={hasNavigation} />

      <ProfileSettingsModal />
      <LocationFieldsModal />
      <LocationKitchenTypesModal />
      <SuccessCreateLocationModal />
      <LocationViewOptionsModal />
      <PreRemoveLocationModal />
      <LocationPreloadModal />
      <PostPreviewModal />
      <CreatePostModal />
    </Styled.Root>
  )
}

export default route(NavigationRoute, ROUTE_NAMES.navigation)
