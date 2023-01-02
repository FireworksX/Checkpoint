import { FC, useCallback, useState } from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import * as Styled from './styles'
import SwiperClass from 'swiper/types/swiper-class'
import Icon from '../Icon/Icon'

interface GalleryProps {
  className?: string
}

const SWIPE_SPEED = 500

const Gallery: FC<GalleryProps> = ({ className }) => {
  const [swiper, setSwiper] = useState<SwiperClass | undefined>()

  const nextSlide = useCallback(() => {
    if (swiper) {
      swiper.slideNext(SWIPE_SPEED)
    }
  }, [swiper])

  const prevSlide = useCallback(() => {
    if (swiper) {
      swiper.slidePrev(SWIPE_SPEED)
    }
  }, [swiper])

  return (
    <Styled.Root className={className}>
      <Styled.ButtonPrev onClick={prevSlide}>
        <Icon name='caret-left' />
      </Styled.ButtonPrev>
      <Styled.ButtonNext onClick={nextSlide}>
        <Icon name='caret-right' />
      </Styled.ButtonNext>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination
        navigation
        onSwiper={setSwiper}
      >
        <SwiperSlide>
          <Styled.Slide>1</Styled.Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Slide>2</Styled.Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Slide>3</Styled.Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Slide>4</Styled.Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Styled.Slide>5</Styled.Slide>
        </SwiperSlide>
      </Swiper>
    </Styled.Root>
  )
}

export default Gallery
