import {FC} from 'react'
import Map from 'react-map-gl';
import {useMyLocation} from "../../hooks/useMyLocation";

interface DisplayMapProps {
  className?: string
}

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN

const DisplayMap: FC<DisplayMapProps> = ({ className }) => {
  const {marker, control}  =useMyLocation()

  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{ width: '100%', height: 'calc(100vh - 70px)' }}
      mapStyle='mapbox://styles/mapbox/streets-v12'
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {marker}
      {control}
    </Map>
  )
}

export default DisplayMap
