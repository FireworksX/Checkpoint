import { useCallback, useState } from 'react'

export const useQueue = <T = unknown>(stack: T[]) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goNext = useCallback(() => {
    if (currentIndex !== stack.length) {
      setCurrentIndex(curr => curr + 1)
    }
  }, [currentIndex, setCurrentIndex, stack])

  const goPrev = useCallback(() => {
    if (currentIndex !== stack.length) {
      setCurrentIndex(curr => curr - 1)
    }
  }, [currentIndex, setCurrentIndex, stack])

  return {
    currentIndex,
    currentValue: stack[currentIndex],
    hasNext: stack.length - 1 > currentIndex,
    hasPrev: currentIndex !== 0,
    goNext,
    goPrev
  }
}
