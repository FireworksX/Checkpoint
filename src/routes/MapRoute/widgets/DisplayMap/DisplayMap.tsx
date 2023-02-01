import {FC, useCallback} from 'react'
import {useRecoilState} from "recoil";
import Map from 'react-map-gl'
import { useMyLocation } from '../../hooks/useMyLocation'
import { useDisplayMap } from './hooks/useDisplayMap'
import { useModal } from '../../../../hooks/useModal'
import { MODAL_NAMES } from '../../../../router/constants'
import MapNearSearchSource from '../MapNearSearch/components/MapNearSearchSource/MapNearSearchSource'
import {mapInstanceAtom} from "src/store/mapStore";

interface DisplayMapProps {
  className?: string
}

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN

const DisplayMap: FC<DisplayMapProps> = ({ className }) => {
  const [_mapInstance, setMapInstance] = useRecoilState(mapInstanceAtom)
  const { open } = useModal(MODAL_NAMES.placePreview)
  const { marker, control } = useMyLocation()
  const { mapPosition } = useDisplayMap()

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setMapInstance(node)
    }
  }, [setMapInstance]);

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
      {/*<PlacemarksSource visible={false} />*/}
      <MapNearSearchSource />
    </Map>
  )
}

export default DisplayMap
