import { useState } from 'react'

export const useUIStore = () => {
  const [hasNavigation, setHasNavigation] = useState<boolean>(true)

  return {
    hasNavigation,
    setHasNavigation
  }
}
