import { RefObject, useEffect, useState } from 'react'

export const useScrollEnd = (ref: RefObject<HTMLElement>) => {
  const [scrolledLeft, setScrolledLeft] = useState(false)
  const [scrolledRight, setScrolledRight] = useState(false)

  useEffect(() => {
    const elem = ref.current
    if (!elem) return

    const updateScrollState = () => {
      const scrollLeft = elem.scrollLeft

      if (scrollLeft > 0) {
        setScrolledRight(true)
      } else {
        setScrolledRight(false)
      }

      if (elem.offsetWidth + scrollLeft < elem.scrollWidth) {
        setScrolledLeft(true)
      } else {
        setScrolledLeft(false)
      }
    }

    updateScrollState()

    elem.addEventListener('scroll', updateScrollState)
    window.addEventListener('resize', updateScrollState)

    return () => {
      elem.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [ref])

  return { scrolledLeft, scrolledRight }
}
