import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { cacheService } from 'src/utils/cacheService'
import { userCurrentLocationAtom } from 'src/store/userStore'

export const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useRecoilState(userCurrentLocationAtom)

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCurrentLocation({
        lat: coords?.latitude,
        lng: coords?.longitude
      })

      if (coords) {
        cacheService().addItem('selfLocation', { lat: coords.latitude, lng: coords.longitude })
      }
    })
  }, [])

  return currentLocation
}
