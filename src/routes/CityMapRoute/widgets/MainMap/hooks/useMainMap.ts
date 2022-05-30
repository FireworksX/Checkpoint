import { useRecoilState } from 'recoil'
import { useGeoLocation } from 'src/hooks/useGeoLocation'
import { mapCenterAtom, mapPlacemarksAtom, mapSaveCenterAtom, mapZoomAtom } from 'src/store/mapStore'
import { useIsomorphicEffect } from 'src/hooks/useIsomorphicEffect'
import { useCurrentUserPlaces } from 'src/hooks/data/useCurrentUserPlaces'
import { useCallback } from 'react'

export const useMainMap = () => {
  const { data: userPlaces } = useCurrentUserPlaces()
  const [placemarks, setPlacemarks] = useRecoilState(mapPlacemarksAtom)
  const [saveCenter, setSaveCenter] = useRecoilState(mapSaveCenterAtom)
  const [center, setCenter] = useRecoilState(mapCenterAtom)
  const [zoom, setZoom] = useRecoilState(mapZoomAtom)
  const { currentLocation } = useGeoLocation()

  useIsomorphicEffect(() => {
    if (currentLocation) {
      setCenter(currentLocation)
      setSaveCenter(currentLocation)
    }
  }, [])

  useIsomorphicEffect(() => {
    setPlacemarks(userPlaces?.data || [])
  }, [userPlaces])

  const onDragend = useCallback((map: any) => {
    setSaveCenter({
      lat: map?.center?.lat(),
      lng: map?.center?.lng()
    })
  }, [])

  const onZoomChange = useCallback((map: any) => {
    setZoom(map?.getZoom())
  }, [])

  return {
    placemarks,
    zoom,
    setZoom,
    center,
    saveCenter,
    currentLocation,
    onDragend,
    onZoomChange
  }
}
