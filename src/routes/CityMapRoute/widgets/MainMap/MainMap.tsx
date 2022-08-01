import { FC } from 'react'
import * as Styled from './styles'
import SelfPlacemark from './components/SelfPlacemark/SelfPlacemark'
import MapWrapper from 'src/widgets/MapWrapper/MapWrapper'
import { useMainMap } from './hooks/useMainMap'
import Placemark from 'src/widgets/Placemark/Placemark'

interface MainMapProps {
  className?: string
}

const MainMap: FC<MainMapProps> = ({ className }) => {
  const { center, zoom, userLocation, placemarks, onClickPlacemark, onDragend, onZoomChange } = useMainMap()

  return (
    <Styled.Root className={className}>
      <MapWrapper zoom={zoom} center={center} onDragend={onDragend} onZoomChange={onZoomChange}>
        {userLocation?.lat && userLocation?.lng && <SelfPlacemark lat={userLocation?.lat} lng={userLocation?.lng} />}
        {placemarks.map(placemark => (
          <Placemark
            key={placemark._id}
            lat={placemark.coords.lat}
            lng={placemark.coords.lng}
            onClick={() => onClickPlacemark(placemark)}
          />
        ))}
      </MapWrapper>
    </Styled.Root>
  )
}

export default MainMap
