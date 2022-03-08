import { useEffect, useState } from 'react'
import { cacheService } from 'src/utils/cacheService'

export const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<GeolocationPosition['coords'] | undefined>(
    cacheService().getItem('selfLocation')
  )

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCurrentLocation(coords)

      if (coords) {
        cacheService().addItem('selfLocation', { latitude: coords.latitude, longitude: coords.longitude })
      }
    })
  }, [])

  return currentLocation
}
