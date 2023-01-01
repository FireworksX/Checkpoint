import { useCallback, useMemo } from 'react'
import { useRouter } from 'react-router5'
import isBrowser from '../utils/isBrowser'

export const useShare = () => {
  const router = useRouter()
  const isAvailable = useMemo(() => isBrowser && 'share' in navigator, [])

  const share = useCallback(() => {
    if (isAvailable) {
      navigator.share({
        url: router.getState().path,
        title: 'The coffee club'
      })
    }
  }, [isAvailable, router])

  return {
    isAvailable,
    share
  }
}
