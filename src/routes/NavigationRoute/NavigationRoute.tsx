import { FC } from 'react'
import { useStore } from '@nanostores/react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import { hasNavigationAtom } from 'src/store/uiStore'
import PostPreviewModal from 'src/modals/PostPreviewModal/PostPreviewModal'
import CreatePostModal from 'src/modals/CreatePostModal/CreatePostModal'
import GeoLocationRestricted from '../../modals/GeoLocationRestricted/GeoLocationRestricted'
import Snackbar from '../../widgets/Snackbar/Snackbar'
import PlacePreviewModal from '../../modals/PlacePreviewModal/PlacePreviewModal'
import PostActions from '../../modals/PostActions/PostActions'

interface NavigationRouteProps {
  className?: string
}

const NavigationRoute: FC<NavigationRouteProps> = ({ className, children }) => {
  const hasNavigation = useStore(hasNavigationAtom)

  return (
    <Styled.Root className={className}>
      {children}
      <Styled.Navigation hasNavigation={hasNavigation} />

      <Snackbar />
      <PlacePreviewModal />
      <PostPreviewModal />
      <CreatePostModal />
      <GeoLocationRestricted />
      <PostActions />
    </Styled.Root>
  )
}

export default route(NavigationRoute, ROUTE_NAMES.navigation)
