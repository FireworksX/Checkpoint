import { useRecoilState } from 'recoil'
import { useGeoLocation } from 'src/hooks/useGeoLocation'
import { mapCenterAtom, mapSaveCenterAtom, mapZoomAtom } from 'src/store/mapStore'
import { useIsomorphicEffect } from 'src/hooks/useIsomorphicEffect'
import { useCurrentUserPlaces } from 'src/hooks/data/useCurrentUserPlaces'
import { useCallback, useEffect, useRef } from 'react'
import { useCityInfo } from 'src/routes/CityInfoRoute/hooks/useCityInfo'
import { useUserLocation } from 'src/hooks/data/useUserLocation'
import { useMapPlacemarks } from './useMapPlacemarks'
import { LocationPlacemark } from 'src/interfaces/Placemark'
import { useRouter } from 'src/hooks/useRouter'
import { ROUTE_PARAMS } from 'src/router/constants'

export const useMainMap = () => {
  const alreadyDisplayLocation = useRef(false)

  const { data: userPlaces } = useCurrentUserPlaces()
  const [saveCenter, setSaveCenter] = useRecoilState(mapSaveCenterAtom)
  const [center, setCenter] = useRecoilState(mapCenterAtom)
  const [zoom, setZoom] = useRecoilState(mapZoomAtom)
  const { zoom: geoZoom, center: geoCenter } = useGeoLocation()
  const { userLocation } = useUserLocation()
  const { route } = useRouter()
  const mapLocation = route.params[ROUTE_PARAMS.mapLocation]

  const { placemarks, onClickPlacemark } = useMapPlacemarks()

  // const proxyCenter = isDetectedLocation ? currentLocation : city?.geo
  // const initialZoom = profileZoom || city?.geo?.zoom

  useIsomorphicEffect(() => {
    // setZoom(geoZoom)

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

  const onDragend = useCallback(
    (map: any) => {
      setSaveCenter({
        lat: map?.center?.lat(),
        lng: map?.center?.lng()
      })
    },
    [setSaveCenter]
  )

  const onZoomChange = useCallback(
    (map: any) => {
      setZoom(map?.getZoom())
    },
    [setZoom]
  )

  const onClickPlacemarkProxy = useCallback(
    (placemark: LocationPlacemark) => {
      setCenter(placemark.coords)
      onClickPlacemark(placemark)
    },
    [onClickPlacemark, setCenter]
  )

  useEffect(() => {
    if (!alreadyDisplayLocation.current) {
      const findPlacemark = placemarks.find(({ slug }) => slug === mapLocation)

      if (findPlacemark) {
        requestAnimationFrame(() => {
          onClickPlacemarkProxy(findPlacemark)
          alreadyDisplayLocation.current = true
        })
      }
    }
  }, [mapLocation, placemarks, onClickPlacemarkProxy, alreadyDisplayLocation])

  return {
    placemarks,
    onClickPlacemark: onClickPlacemarkProxy,
    zoom,
    setZoom,
    center,
    saveCenter,
    userLocation,
    onDragend,
    onZoomChange
  }
}
