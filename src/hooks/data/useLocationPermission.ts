import { useCallback } from 'react'
import { useStore } from '@nanostores/react'
import isBrowser from 'src/utils/isBrowser'
import { userHasGeoPermissionAtom } from '../../store/userStore'

export const useLocationPermission = () => {
  const hasPermissions = useStore(userHasGeoPermissionAtom)

  const askPermission = useCallback(() => {
    if (isBrowser) {
      return new Promise<boolean>(resolve =>
        navigator.geolocation.getCurrentPosition(
          () => {
            userHasGeoPermissionAtom.set(true)
            resolve(true)
          },
          () => {
            userHasGeoPermissionAtom.set(false)
            resolve(false)
          }
        )
      )
    }
  }, [])

  return {
    askPermission,
    hasPermissions
  }
}
