import { useCurrentLocation } from 'src/hooks/useCurrentLocation'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Coords } from 'google-map-react'
import { useIsomorphicEffect } from 'src/hooks/useIsomorphicEffect'
import { useCurrentUserPlaces } from 'src/hooks/data/useCurrentUserPlaces'
import isBrowser from "../utils/isBrowser";

export type Placemark = {
  id: string | number // Unique id for search / remove
} & Coords

const DEFAULT_CENTER: Coords = {
  lat: 0,
  lng: 0
}

export const useMapStore = () => {
  const { data: userPlaces } = useCurrentUserPlaces()

  const [placemarksMap, setPlacemarksMap] = useState<Record<Placemark['id'], Placemark>>({})
  const [center, setCenter] = useState<Coords>(DEFAULT_CENTER)
  /**
   * Меняется когда ты драгаешь карку, setCenter не используется т.к. будет вызывать event на panTo карты
   */
  const [saveCenter, setSaveCenter] = useState<Coords>(DEFAULT_CENTER)
  const [zoom, setZoom] = useState(15)
  const selfLocation = useCurrentLocation()
  const placemarksList = useMemo(() => Object.values(placemarksMap), [placemarksMap])

  const addPlacemark = useCallback((placemark: Placemark) => {
    if (placemark.id in placemarksMap) {
      console.warn(`Duplicate placemark: ${placemark.id}`)
      return
    }

    setPlacemarksMap(map => ({ ...map, [placemark.id]: placemark }))
  }, [])

  useIsomorphicEffect(() => {
    // console.log(userPlaces, '33')
  }, [userPlaces])

  useIsomorphicEffect(() => {
    setCenter({
      lat: selfLocation?.latitude || DEFAULT_CENTER.lat,
      lng: selfLocation?.longitude || DEFAULT_CENTER.lng
    })
  }, [selfLocation])

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
