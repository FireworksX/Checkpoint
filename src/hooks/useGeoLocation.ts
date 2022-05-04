import { useCallback, useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cacheService } from 'src/utils/cacheService'
import { geoLocationAtom } from 'src/store/userStore'
import { userAgentAtom } from '../store/configStore'
import useCookies from './useCookies'

export const useGeoLocation = () => {
  const [_, setSelfLocation] = useCookies('selfLocation')
  const [geoLocation, setGeoLocation] = useRecoilState(geoLocationAtom)
  const userAgentValue = useRecoilValue(userAgentAtom)

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
      setSelfLocation({ lat: coords.latitude, lng: coords.longitude })
    }
  }, [])

  const onGetPermissions = useCallback(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => onSubmitLocation(coords))
  }, [setGeoLocation])

  useEffect(() => {
    if (userAgentValue?.isSafari) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          onValidatePermissions('granted')
          onSubmitLocation(coords)
        },
        () => {
          onValidatePermissions('denied')
        }
      )
    } else {
      navigator.permissions.query({ name: 'geolocation' }).then(result => {
        onValidatePermissions(result.state)
        result.addEventListener('change', () => onValidatePermissions(result.state))
      })
    }
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
