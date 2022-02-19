import { useCurrentLocation } from 'src/hooks/useCurrentLocation'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Coords } from 'google-map-react'

export type Placemark = {
  id: string | number // Unique id for search / remove
} & Coords

const DEFAULT_CENTER: Coords = {
  lat: 0,
  lng: 0
}

export const useMapStore = () => {
  const [placemarksMap, setPlacemarksMap] = useState<Record<Placemark['id'], Placemark>>({})
  const [center, setCenter] = useState<Coords>(DEFAULT_CENTER)
  const [saveCenter, setSaveCenter] = useState<Coords>(DEFAULT_CENTER)
  const [zoom, setZoom] = useState(15)
  const selfLocation = useCurrentLocation()

  useEffect(() => {
    setCenter({
      lat: selfLocation?.latitude || DEFAULT_CENTER.lat,
      lng: selfLocation?.longitude || DEFAULT_CENTER.lng
    })
  }, [selfLocation])

  const placemarksList = useMemo(() => Object.values(placemarksMap), [placemarksMap])

  const addPlacemark = useCallback((placemark: Placemark) => {
    if (placemark.id in placemarksMap) {
      console.warn(`Duplicate placemark: ${placemark.id}`)
      return
    }

    setPlacemarksMap(map => ({ ...map, [placemark.id]: placemark }))
  }, [])

  return {
    saveCenter,
    setSaveCenter,
    selfLocation,
    zoom,
    setZoom,
    setCenter,
    center,
    placemarksList,
    addPlacemark
  }
}
