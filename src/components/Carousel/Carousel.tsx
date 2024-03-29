import React, { FC, useCallback, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperClass } from 'swiper'
import 'swiper/swiper.min.css'

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
  }, [onChangeSlide])

  useEffect(() => {
    if (typeof activeSlide === 'number') {
      slideTo(activeSlide)
    }
  }, [activeSlide, slideTo])

  return (
    <Swiper className={className} allowTouchMove={allowTouchMove} onSwiper={setSwiper} onSlideChange={onChange}>
      {React.Children.toArray(children).map((slide, index) => (
        <SwiperSlide key={`slide_${index}`}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
