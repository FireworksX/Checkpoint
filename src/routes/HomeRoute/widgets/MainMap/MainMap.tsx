import { FC } from 'react'
import * as Styled from './styles'
import SelfPlacemark from './components/SelfPlacemark/SelfPlacemark'
import Placemark from './components/Placemark/Placemark'
import { useStore } from 'src/store'
import MapWrapper from 'src/widgets/MapWrapper/MapWrapper'

interface MainMapProps {
  className?: string
}

const MainMap: FC<MainMapProps> = ({ className }) => {
  const { center, zoom, selfLocation, placemarksList, setSaveCenter } = useStore.mapStore()

  const onDragend = (map: any) => {
    setSaveCenter({
      lat: map?.center?.lat(),
      lng: map?.center?.lng()
    })
  }

  return (
    <Styled.Root className={className}>
      <MapWrapper zoom={zoom} center={center} onDragend={onDragend}>
        {selfLocation?.longitude && <SelfPlacemark lat={selfLocation?.latitude} lng={selfLocation?.longitude} />}
        {placemarksList.map(placemark => (
          <Placemark key={placemark.id} lat={placemark.lat} lng={placemark.lng} />
        ))}
      </MapWrapper>
    </Styled.Root>
  )
}

export default MainMap
