import { useRecoilState } from 'recoil'
import { useGeoLocation } from 'src/hooks/useGeoLocation'
import { mapCenterAtom, mapPlacemarksAtom, mapSaveCenterAtom, mapZoomAtom } from 'src/store/mapStore'
import { useIsomorphicEffect } from 'src/hooks/useIsomorphicEffect'
import { useCurrentUserPlaces } from 'src/hooks/data/useCurrentUserPlaces'
import { useCallback } from 'react'
import { useCityInfo } from 'src/routes/CityInfoRoute/hooks/useCityInfo'
import { useUserLocation } from 'src/hooks/data/useUserLocation'

export const useMainMap = () => {
  const { data: userPlaces } = useCurrentUserPlaces()
  const { city } = useCityInfo()
  const [placemarks, setPlacemarks] = useRecoilState(mapPlacemarksAtom)
  const [saveCenter, setSaveCenter] = useRecoilState(mapSaveCenterAtom)
  const [center, setCenter] = useRecoilState(mapCenterAtom)
  const [zoom, setZoom] = useRecoilState(mapZoomAtom)
  const { zoom: geoZoom, center: geoCenter } = useGeoLocation()
  const { userLocation } = useUserLocation()

  // const proxyCenter = isDetectedLocation ? currentLocation : city?.geo
  // const initialZoom = profileZoom || city?.geo?.zoom

  useIsomorphicEffect(() => {
    setZoom(geoZoom)

    if (saveCenter.lat > 0 && saveCenter.lng > 0) {
      setCenter(saveCenter)
    } else {
      setCenter(geoCenter)
      setSaveCenter(geoCenter)
    }

    // if (proxyCenter) {
    // }
    //
    // console.log(initialZoom);
    // if (initialZoom) {
    //   setZoom(initialZoom)
    // }
  }, [])

  useIsomorphicEffect(() => {
    // setPlacemarks(userPlaces?.data || [])
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
    userLocation,
    onDragend,
    onZoomChange
  }
}
