import { FC, useEffect, useState } from 'react'
import mapStyles from './mapStyles.json'
import GoogleMapReact, { Coords } from 'google-map-react'

interface MapWrapperProps {
  className?: string
  zoom?: number
  center?: Coords
  onDragend?: (map: any) => void
  onZoomChange?: (map: any) => void
}

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 11
}

const MAP_KEY = 'AIzaSyDmf_DUzM3a8aq_xGPTnPKJB2IHU0izWBQ'

const MapWrapper: FC<MapWrapperProps> = ({ className, children, zoom, center, onDragend, onZoomChange }) => {
  const [map, setMap] = useState<any>()

  const apiHasLoaded = ({ map, maps }: any) => {
    setMap(map)
  }

  useEffect(() => {
    if (map) {
      if (onDragend) {
        map.addListener('dragend', () => onDragend(map))
      }
      if (onZoomChange) {
        map.addListener('zoom_changed', () => onZoomChange(map))
      }
    }
  }, [map])

  return (
    <GoogleMapReact
      options={{
        zoomControl: false,
        fullscreenControl: false,
        mapId: 'e7e50c35fc383495',
        gestureHandling: 'greedy'
      }}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={apiHasLoaded}
      zoom={zoom}
      center={center}
      bootstrapURLKeys={{ key: MAP_KEY }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      {children}
    </GoogleMapReact>
  )
}

export default MapWrapper
