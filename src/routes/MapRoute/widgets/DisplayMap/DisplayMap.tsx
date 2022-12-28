import { FC, useEffect, useRef } from 'react'
import Map from 'react-map-gl'
import { useMyLocation } from '../../hooks/useMyLocation'
import { useDisplayMap } from './hooks/useDisplayMap'

interface DisplayMapProps {
  className?: string
}

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN

const DisplayMap: FC<DisplayMapProps> = ({ className }) => {
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
    </Map>
  )
}

export default DisplayMap
