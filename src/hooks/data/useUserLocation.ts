import { useCallback, useState } from 'react'
import { useRecoilState } from 'recoil'
import { userLocationAtom } from 'src/store/userStore'
import useCookies from '../useCookies'
import { useIsomorphicEffect } from '../useIsomorphicEffect'

export const useUserLocation = () => {
  const [cookieSelfLocation] = useCookies('selfLocation')
  const [hasPermissions, setHasPermissions] = useState(false)
  const [userLocation, setUserLocation] = useRecoilState(userLocationAtom)

  // const onSubmitLocation = useCallback(
  //   (coords: GeolocationPosition['coords']) => {
  //     setUserLocation({
  //       lat: coords?.latitude,
  //       lng: coords?.longitude
  //     })
  //   },
  //   [setUserLocation]
  // )

  // const onGetPermissions = useCallback(
  //   () => navigator.geolocation.getCurrentPosition(({ coords }) => onSubmitLocation(coords)),
  //   [onSubmitLocation]
  // )

  // useEffect(() => {
  //   if (!hasPermissions) {
  //     onGetPermissions()
  //   }
  // }, [hasPermissions, onGetPermissions])

  // useEffect(() => {
  //   if (userAgent?.isSafari) {
  //     navigator.geolocation.getCurrentPosition(
  //       ({ coords }) => {
  //         onValidatePermissions('granted')
  //         onSubmitLocation(coords)
  //       },
  //       () => {
  //         onValidatePermissions('denied')
  //       }
  //     )
  //   } else {
  //     navigator.permissions.query({ name: 'geolocation' }).then(result => {
  //       onValidatePermissions(result.state)
  //       result.addEventListener('change', () => onValidatePermissions(result.state))
  //     })
  //   }
  // }, [onSubmitLocation, userAgent])

  useIsomorphicEffect(() => {
    if (cookieSelfLocation?.lat && cookieSelfLocation.lng) {
      setUserLocation({
        lat: cookieSelfLocation.lat,
        lng: cookieSelfLocation.lng
      })
    }
  })

  return {
    userLocation,
    hasPermissions
  }
}
