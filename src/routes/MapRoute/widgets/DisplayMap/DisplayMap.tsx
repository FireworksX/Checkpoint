import { FC, useCallback } from 'react'
import Map from 'react-map-gl'
import { useMyLocation } from '../../hooks/useMyLocation'
import { useDisplayMap } from './hooks/useDisplayMap'
import MapNearSearchSource from '../MapNearSearch/components/MapNearSearchSource/MapNearSearchSource'
import { mapInstanceAtom } from 'src/store/mapStore'
import PlacemarksSource from '../PlacemarksSource/PlacemarksSource'
import { usePlacemarks } from '../../../../hooks/data/usePlacemarks/usePlacemarks'

interface DisplayMapProps {
  className?: string
}

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN

const DisplayMap: FC<DisplayMapProps> = ({ className }) => {
  const { marker, control } = useMyLocation()
  const { mapPosition } = useDisplayMap()
  usePlacemarks()

  const measuredRef = useCallback(node => {
    if (node !== null) {
      mapInstanceAtom.set(node)
    }
  }, [])

  return (
    <Map
      initialViewState={{
        longitude: mapPosition.center.lng,
        latitude: mapPosition.center.lat,
        zoom: mapPosition.zoom
      }}
      ref={measuredRef}
      style={{ width: '100%', height: 'calc(100vh - 70px)' }}
      mapStyle='mapbox://styles/mapbox/light-v11'
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {marker}
      {control}
      <PlacemarksSource />
      <MapNearSearchSource />
    </Map>
  )
}

export default DisplayMap
