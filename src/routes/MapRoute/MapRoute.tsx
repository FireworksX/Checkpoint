import { FC } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as Styled from './styles'
import { ROUTE_NAMES } from '../../router/constants'
import { route } from '../../hoc/route'
import DisplayMap from './widgets/DisplayMap/DisplayMap'
import FocusLocation from './widgets/FocusLocation/FocusLocation'
import MapNearSearch from './widgets/MapNearSearch/MapNearSearch'
import { useMapSettings } from '../../hooks/data/useMapSettings/useMapSettings'

interface MapRouteProps {
  className?: string
}

const MapRoute: FC<MapRouteProps> = ({ className }) => {
  useMapSettings()

  return (
    <Styled.Root className={className} safeAreaBottom={false}>
      <FocusLocation />
      <DisplayMap />
      <MapNearSearch />
    </Styled.Root>
  )
}

export default route(MapRoute, ROUTE_NAMES.map)
