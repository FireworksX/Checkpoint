import { FC, useEffect, useRef } from 'react'
import Map, { Marker } from 'react-map-gl'
import { useMyLocation } from '../../hooks/useMyLocation'
import { useDisplayMap } from './hooks/useDisplayMap'
import Placemark from './components/Placemark/Placemark'
import { times } from '../../../../utils/times'
import {random} from "../../../../utils/random";
import {useModal} from "../../../../hooks/useModal";
import {MODAL_NAMES} from "../../../../router/constants";
import {PostPreviewModalContext} from "../../../../modals/PostPreviewModal/PostPreviewModal";
import {getRandomPostText, getRandomUser} from "../../../../data/mocks";
import LocationCard from "../../../../widgets/LocationCard/LocationCard";

interface DisplayMapProps {
  className?: string
}

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN

const marks = times(200).map(() => [random(0, 120), random(-50, 90)])

const DisplayMap: FC<DisplayMapProps> = ({ className }) => {
    const {open} = useModal<PostPreviewModalContext>(MODAL_NAMES.postPreview)
  const { marker, control } = useMyLocation()
  const map = useRef('')
  const { mapPosition, onZoom, onDrag } = useDisplayMap()

  useEffect(() => {
    if (map.current) {
      // map.current.on('zoomEnd', console.log)
    }
  }, [map.current])

  return (
    <Map
      initialViewState={{
        longitude: mapPosition.lng,
        latitude: mapPosition.lat,
        zoom: mapPosition.zoom
      }}
      ref={map}
      minZoom={2}
      onZoom={onZoom}
      onDrag={onDrag}
      style={{ width: '100%', height: 'calc(100vh - 70px)' }}
      mapStyle='mapbox://styles/mapbox/light-v11'
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {marker}
      {control}
      {marks.map(([lng, lat]) => (
        <Marker longitude={lng} latitude={lat} anchor='bottom'>
          <Placemark onClick={() => open({
              target: <LocationCard name='test' location='Phuket, Thailand'/>,
              author: getRandomUser(),
              content: getRandomPostText()
          })} />
        </Marker>
      ))}
    </Map>
  )
}

export default DisplayMap
