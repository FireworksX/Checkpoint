import React, { FC, useCallback, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperClass } from 'swiper'
import './swiper.min.css'

interface CarouselProps {
  className?: string
  activeSlide?: number
  allowTouchMove?: boolean
  onChangeSlide?: (currentIndex: number) => any
}

const Carousel: FC<CarouselProps> = ({ className, allowTouchMove = true, activeSlide, children, onChangeSlide }) => {
  const [swiper, setSwiper] = useState<SwiperClass | undefined>()

  const slideTo = useCallback((index: number) => swiper?.slideTo(index, 500), [swiper])

  const onChange = useCallback((swiper: SwiperClass) => {
    if (onChangeSlide) {
      onChangeSlide(swiper.activeIndex)
    }
  }, [])

  useEffect(() => {
    if (typeof activeSlide === 'number') {
      slideTo(activeSlide)
    }
  }, [activeSlide])

  return (
    <Swiper className={className} allowTouchMove={allowTouchMove} onSwiper={setSwiper} onSlideChange={onChange}>
      {React.Children.toArray(children).map(slide => (
        <SwiperSlide>{slide}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
