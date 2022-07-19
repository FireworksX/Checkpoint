import { FC, useState } from 'react'
import * as Styled from './styles'
import { route } from '../../hoc/route'
import { ROUTE_NAMES } from '../../router/constants'
import Icon from '../../components/Icon/Icon'
import Container from '../../components/Container/Container'
import MapSearchUsers from './widgets/MapSearchUsers/MapSearchUsers'
import MapSearchLocations from './widgets/MapSearchLocations/MapSearchLocations'
import Link from '../../widgets/Link/Link'
import { useHideNavigation } from '../../hooks/useHideNavigation'

interface CityMapSearchRouteProps {
  className?: string
}

type ViewType = 'users' | 'locations'

const CityMapSearchRoute: FC<CityMapSearchRouteProps> = ({ className }) => {
  const [view, setView] = useState<ViewType>('users')
  useHideNavigation()

  return (
    <Styled.Root className={className}>
      <Styled.Header
        right={
          <Link type='cityMap'>
            <Styled.CloseIcon>
              <Icon name='close' width={14} height={14} />
            </Styled.CloseIcon>
          </Link>
        }
      >
        Поиск
      </Styled.Header>

      <Container>
        <Styled.ToggleWrapper>
          <Styled.ToggleInner isActive={view === 'users'} onClick={() => setView('users')}>
            Люди
          </Styled.ToggleInner>
          <Styled.ToggleInner isActive={view === 'locations'} onClick={() => setView('locations')}>
            Места
          </Styled.ToggleInner>
        </Styled.ToggleWrapper>

        {view === 'users' && <MapSearchUsers />}
        {view === 'locations' && <MapSearchLocations />}
      </Container>
    </Styled.Root>
  )
}

export default route(CityMapSearchRoute, ROUTE_NAMES.cityMapSearch)
