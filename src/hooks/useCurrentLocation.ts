import { useEffect, useState } from 'react'

export const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<GeolocationPosition['coords'] | undefined>()

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => setCurrentLocation(coords))
  }, [])

  return currentLocation
}
