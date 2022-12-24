import { useCallback } from 'react'
import {useRecoilState} from 'recoil'
import isBrowser from 'src/utils/isBrowser'
import {userHasGeoPermission} from "../../store/userStore";

export const useLocationPermission = () => {
  const [hasPermissions, setHasPermissions] = useRecoilState(userHasGeoPermission)

  const askPermission = useCallback(() => {
    if (isBrowser) {
      return new Promise<boolean>((resolve) =>
        navigator.geolocation.getCurrentPosition(
          () => {
            setHasPermissions(true)
            resolve(true)
          },
          () => {
            setHasPermissions(false)
            resolve(false)
          }
        )
      )
    }
  }, [setHasPermissions])

  return {
    askPermission,
    hasPermissions
  }
}
