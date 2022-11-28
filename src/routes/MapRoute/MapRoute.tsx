import { FC } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as Styled from './styles'
import { ROUTE_NAMES } from '../../router/constants'
import { route } from '../../hoc/route'
import { useMap } from './hooks/useMap'

mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZXdvcmtzeHMiLCJhIjoiY2xhd2QycWwwMGVnczN2cGdraXZwc2dpayJ9.pCxhrZN43fOdF_cLo6uTgA'

interface MapRouteProps {
  className?: string
}

const MapRoute: FC<MapRouteProps> = ({ className }) => {
  const { container } = useMap()


  return (
    <Styled.Root className={className} safeAreaBottom={false}>
      <div ref={container} className='map-container' />
    </Styled.Root>
  )
}

export default route(MapRoute, ROUTE_NAMES.map)
