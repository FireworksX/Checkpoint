import { useCallback, useEffect, useState } from 'react'

export const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState<number | undefined>()
  const [screenHeight, setScreenHeight] = useState<number | undefined>()

  const update = useCallback(() => {
    const width = window.screen.width
    const height = window.screen.height

    setScreenWidth(width)
    setScreenHeight(height)
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)

    return () => window.removeEventListener('resize', update)
  }, [update])

  return [screenWidth, screenHeight]
}
