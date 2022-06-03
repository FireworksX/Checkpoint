import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'
import { useCityInfo } from 'src/routes/CityInfoRoute/hooks/useCityInfo'
import { buildMediaFilePath } from 'src/utils/buildMediaFilePath'

interface CityInfoGalleryProps {
  className?: string
}

const CityInfoGallery: FC<CityInfoGalleryProps> = ({ className }) => {
  const { city } = useCityInfo()

  return (
    <Styled.Root className={className}>
      <HorizontalScroll>
        {city?.gallery.map((file, index) => (
          <Container key={index}>
            <Styled.Slide>
              <Styled.SlideImage src={buildMediaFilePath(file)} />
            </Styled.Slide>
          </Container>
        ))}
      </HorizontalScroll>
    </Styled.Root>
  )
}

export default CityInfoGallery
