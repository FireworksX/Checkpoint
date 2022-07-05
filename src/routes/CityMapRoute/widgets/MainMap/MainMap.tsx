import { FC } from 'react'
import * as Styled from './styles'
import SelfPlacemark from './components/SelfPlacemark/SelfPlacemark'
import MapWrapper from 'src/widgets/MapWrapper/MapWrapper'
import { useMainMap } from './hooks/useMainMap'
import Placemark from "../../../../widgets/Placemark/Placemark";

interface MainMapProps {
  className?: string
}

const MainMap: FC<MainMapProps> = ({ className }) => {
  const { center, zoom, userLocation, placemarks, onDragend, onZoomChange } = useMainMap()


  return (
    <Styled.Root className={className}>
      <MapWrapper zoom={zoom} center={center} onDragend={onDragend} onZoomChange={onZoomChange}>
        {userLocation?.lat && userLocation?.lng && (
          <SelfPlacemark lat={userLocation?.lat} lng={userLocation?.lng} />
        )}
        {placemarks.map(placemark => (
          <Placemark key={placemark.id} lat={placemark.lat} lng={placemark.lng} />
        ))}
      </MapWrapper>
    </Styled.Root>
  )
}

export default MainMap
