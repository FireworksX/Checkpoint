import { useRecoilState, useRecoilValue } from 'recoil'
import { useCurrentLocation } from 'src/hooks/useCurrentLocation'
import { mapCenterAtom, mapPlacemarksAtom, mapSaveCenterAtom, mapZoomAtom } from 'src/store/mapStore'
import { useIsomorphicEffect } from 'src/hooks/useIsomorphicEffect'
import { useCurrentUserPlaces } from 'src/hooks/data/useCurrentUserPlaces'

export const useMainMap = () => {
  const { data: userPlaces } = useCurrentUserPlaces()
  const [placemarks, setPlacemarks] = useRecoilState(mapPlacemarksAtom)
  const [saveCenter, setSaveCenter] = useRecoilState(mapSaveCenterAtom)
  const [center, setCenter] = useRecoilState(mapCenterAtom)
  const zoom = useRecoilValue(mapZoomAtom)
  const currentLocation = useCurrentLocation()

  useIsomorphicEffect(() => {
    if (currentLocation) {
      setCenter(currentLocation)
      setSaveCenter(currentLocation)
    }
  })

  useIsomorphicEffect(() => {
    setPlacemarks(userPlaces?.data || [])
  }, [userPlaces])

  const onDragend = (map: any) => {
    setSaveCenter({
      lat: map?.center?.lat(),
      lng: map?.center?.lng()
    })
  }

  return {
    placemarks,
    zoom,
    center,
    saveCenter,
    currentLocation,
    onDragend
  }
}
