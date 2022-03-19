import { FC, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as Styled from './styles'
import SelfPlacemark from './components/SelfPlacemark/SelfPlacemark'
import Placemark from './components/Placemark/Placemark'
import MapWrapper from 'src/widgets/MapWrapper/MapWrapper'
import { useMainMap } from './hooks/useMainMap'

interface MainMapProps {
  className?: string
}

const MainMap: FC<MainMapProps> = ({ className }) => {
  const { center, zoom, currentLocation, placemarks, onDragend } = useMainMap()

  return (
    <Styled.Root className={className}>
      <MapWrapper zoom={zoom} center={center} onDragend={onDragend}>
        {currentLocation?.lat && currentLocation?.lng && (
          <SelfPlacemark lat={currentLocation?.lat} lng={currentLocation?.lng} />
        )}
        {placemarks.map(placemark => (
          <Placemark key={placemark.id} lat={placemark.lat} lng={placemark.lng} />
        ))}
      </MapWrapper>
    </Styled.Root>
  )
}

export default MainMap
