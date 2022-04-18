import { useCallback, useEffect, useState } from 'react'
import { cacheService } from 'src/utils/cacheService'
import isBrowser from '../utils/isBrowser'

const CACHE_KEY = 'permissions:notifications'
const cache = cacheService()

export const useNotifications = () => {
  const [hasPermissions, setHasPermissions] = useState(!!cache.getItem(CACHE_KEY))
  const availableNotifications = isBrowser && 'Notification' in window

  const onValidatePermissions = useCallback(
    (state: NotificationPermission) => {
      setHasPermissions(state === 'granted')
      cache.addItem(CACHE_KEY, state === 'granted')
    },
    [setHasPermissions]
  )

  const onGetPermissions = useCallback(async () => {
    const result = await Notification.requestPermission()

    onValidatePermissions(result)
  }, [onValidatePermissions])

  const onCreateNotifications = useCallback(() => {
    new Notification("Hi there!")
  }, [])

  useEffect(() => {
    if (availableNotifications && !hasPermissions) {
      setHasPermissions(Notification.permission === 'granted')
    }
  }, [])

  return {
    onGetPermissions,
    hasPermissions,
    onCreateNotifications
  }
}
