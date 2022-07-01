import { useMemo } from 'react'
import useCookies from './useCookies'
import { useUserLocation } from './data/useUserLocation'
import { useCityInfo } from '../routes/CityInfoRoute/hooks/useCityInfo'

/*
Нужен для того чтобы карта подстраивалась под пользователя только 1 раз
 */
let isOnceTrigger = true

const DEFAULT_ZOOM_CITY = 10
const DEFAULT_ZOOM_USER = 14

export const useGeoLocation = () => {
  const { city } = useCityInfo()
  const [cookieSelfLocation, setSelfLocation] = useCookies('selfLocation')
  const { userLocation } = useUserLocation()

  const zoom = useMemo(() => {
    if (cookieSelfLocation?.zoom || (userLocation?.lng && userLocation?.lat)) {
      return DEFAULT_ZOOM_USER
    }

    return city?.geo?.zoom || DEFAULT_ZOOM_CITY
  }, [userLocation, cookieSelfLocation, city])

  const center = useMemo(() => {
    if (isOnceTrigger && userLocation?.lat && userLocation?.lng) {
      isOnceTrigger = false

      return userLocation
    }

    if (cookieSelfLocation?.lat && cookieSelfLocation?.lng) {
      return {
        lat: cookieSelfLocation.lat,
        lng: cookieSelfLocation.lng
      }
    }

    return {
      lat: city?.geo.lat,
      lng: city?.geo.lng
    }
  }, [city, cookieSelfLocation, userLocation])

  // useIsomorphicEffect(() => {
  //   if (cookieSelfLocation?.lat && cookieSelfLocation?.lng) {
  //     setCenter({
  //       lat: cookieSelfLocation?.lat,
  //       lng: cookieSelfLocation?.lng
  //     })
  //   }
  // }, [])
  //
  // useEffect(() => {}, [userLocation])

  return {
    center,
    zoom,
    setSelfLocation
  }
}
