import { FC, useEffect, useRef } from 'react'
import Map from 'react-map-gl'
import { useMyLocation } from '../../hooks/useMyLocation'
import { useDisplayMap } from './hooks/useDisplayMap'
import { useModal } from '../../../../hooks/useModal'
import { MODAL_NAMES } from '../../../../router/constants'
import { PostPreviewModalContext } from '../../../../modals/PostPreviewModal/PostPreviewModal'
import MapNearSearchSource from '../MapNearSearch/components/MapNearSearchSource/MapNearSearchSource'

interface DisplayMapProps {
  className?: string
}

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN

const DisplayMap: FC<DisplayMapProps> = ({ className }) => {
  const { open } = useModal<PostPreviewModalContext>(MODAL_NAMES.postCreate)
  const { marker, control } = useMyLocation()
  const map = useRef('')
  const { mapPosition, setZoom, onDrag } = useDisplayMap()

  useEffect(() => {
    if (map.current) {
      // map.current.on('zoomEnd', console.log)
      map.current.on('click', 'near-search', e => {
        open()
      })
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
      minZoom={mapPosition.minZoom}
      maxZoom={mapPosition.maxZoom}
      onZoom={setZoom}
      onDrag={onDrag}
      style={{ width: '100%', height: 'calc(100vh - 70px)' }}
      mapStyle='mapbox://styles/mapbox/light-v11'
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {marker}
      {control}
      {/*<PlacemarksSource visible={false} />*/}
      <MapNearSearchSource />
    </Map>
  )
}

export default DisplayMap
