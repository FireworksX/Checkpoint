import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES, ROUTE_PARAMS } from 'src/router/constants'
import { useRouter } from 'src/hooks/useRouter'
import Redirect from 'src/components/Redirect/Redirect'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { useLinkConfig } from 'src/widgets/Link/hooks/useLinkConfig'
import { buildName } from 'src/utils/buildName'
import CreateCategoryModal from 'src/modals/CreateCategoryModal/CreateCategoryModal'
import ProfileSettingsModal from 'src/modals/ProfileSettingsModal/ProfileSettingsModal'
import EditCategoryModal from 'src/modals/EditCategoryModal/EditCategoryModal'
import LocationFieldsModal from 'src/modals/LocationFieldsModal/LocationFieldsModal'
import LocationKitchenTypesModal from 'src/modals/LocationKitchenTypesModal/LocationKitchenTypesModal'
import ChooseCategoryModal from 'src/modals/ChooseCategoryModal/ChooseCategoryModal'
import SuccessCreateLocationModal from 'src/modals/SuccessCreateLocationModal/SuccessCreateLocationModal'
import LocationViewOptionsModal from 'src/modals/LocationViewOptionsModal/LocationViewOptionsModal'
import PreRemoveLocationModal from 'src/modals/PreRemoveLocationModal/PreRemoveLocationModal'
import LocationPreloadModal from 'src/modals/LocationPreloadModal/LocationPreloadModal'

interface NavigationRouteProps {
  className?: string
}

const NavigationRoute: FC<NavigationRouteProps> = ({ className, children }) => {
  const { citySlug, getParam, route } = useRouter()
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
      <Styled.Navigation hasNavigation />

      <CreateCategoryModal />
      <EditCategoryModal />
      <ProfileSettingsModal />
      <LocationFieldsModal />
      <LocationKitchenTypesModal />
      <ChooseCategoryModal />
      <SuccessCreateLocationModal />
      <LocationViewOptionsModal />
      <PreRemoveLocationModal />
      <LocationPreloadModal />
    </Styled.Root>
  )
}

export default withValidateUser(route(NavigationRoute, ROUTE_NAMES.navigation))
