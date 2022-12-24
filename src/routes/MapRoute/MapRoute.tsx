import { FC } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as Styled from './styles'
import { ROUTE_NAMES } from '../../router/constants'
import { route } from '../../hoc/route'
import DisplayMap from './widgets/DisplayMap/DisplayMap'

mapboxgl.accessToken = ''

interface MapRouteProps {
  className?: string
}

const MapRoute: FC<MapRouteProps> = ({ className }) => {
  return (
    <Styled.Root className={className} safeAreaBottom={false}>
      <DisplayMap />
      <Styled.Create />
    </Styled.Root>
  )
}

export default route(MapRoute, ROUTE_NAMES.map)
