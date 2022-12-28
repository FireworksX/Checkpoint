import { FC } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as Styled from './styles'
import { ROUTE_NAMES } from '../../router/constants'
import { route } from '../../hoc/route'
import DisplayMap from './widgets/DisplayMap/DisplayMap'
import FocusLocation from './widgets/FocusLocation/FocusLocation'

interface MapRouteProps {
  className?: string
}

const MapRoute: FC<MapRouteProps> = ({ className }) => {
  return (
    <Styled.Root className={className} safeAreaBottom={false}>
      <FocusLocation />
      <DisplayMap />
      <Styled.Create />
    </Styled.Root>
  )
}

export default route(MapRoute, ROUTE_NAMES.map)
