import { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { cacheService } from 'src/utils/cacheService'
import { geoLocationAtom } from 'src/store/userStore'

export const useGeoLocation = () => {
  const [geoLocation, setGeoLocation] = useRecoilState(geoLocationAtom)

  const onValidatePermissions = useCallback(
    (state: PermissionStatus['state']) => {
      setGeoLocation(val => ({ ...val, hasPermissions: state === 'granted' }))
    },
    [setGeoLocation]
  )

  const onSubmitLocation = useCallback((coords: GeolocationPosition['coords']) => {
    setGeoLocation(val => ({
      ...val,
      currentLocation: {
        lat: coords?.latitude,
        lng: coords?.longitude
      }
    }))

    if (coords) {
      cacheService().addItem('selfLocation', { lat: coords.latitude, lng: coords.longitude })
    }
  }, [])

  const onGetPermissions = useCallback(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => onSubmitLocation(coords))
  }, [setGeoLocation])

  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then(result => {
      onValidatePermissions(result.state)
      result.addEventListener('change', () => onValidatePermissions(result.state))
    })
  }, [])

  useEffect(() => {
    if (!geoLocation.hasPermissions) {
      onGetPermissions()
    }
  }, [geoLocation])

  return {
    ...geoLocation,
    onGetPermissions
  }
}
