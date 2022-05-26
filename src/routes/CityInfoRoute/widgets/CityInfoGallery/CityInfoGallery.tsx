import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import HorizontalScroll from "src/components/HorizontalScroll/HorizontalScroll";

interface CityInfoGalleryProps {
  className?: string
}

const CityInfoGallery: FC<CityInfoGalleryProps> = ({ className }) => {
  const list = [
    'https://www.onetwotrip.com/ru/blog/wp-content/uploads/2020/09/saint-petersburg.jpg',
    'https://static.mk.ru/upload/entities/2019/01/20/articles/detailPicture/b7/6e/66/d9/937cca8ab01bf40c5f5abdcaa37a0c9a.jpg',
    'https://cdn.nur.kz/images/1120x630/ced45aff7f88c7f4.jpeg',
    'https://sokroma.ru/upload/iblock/b2c/b2c7386b31947cff94aef6d8823210d5.jpg',
    'https://cdn5.vedomosti.ru/image/2019/9e/187n18/original-1las.jpg',
    'https://img-cdn.tinkoffjournal.ru/i/imDU7hwIyA-Q7S-mzXqYqpAGCGG2r0pjoZuyXZZawmc/w:1200/aHR0cHM6Ly9pbWct/Y2RuLnRpbmtvZmZq/b3VybmFsLnJ1Ly0v/bWFpbl90cmF2ZWxf/c3BiX3NlcmdlaS1z/b2tvbG5pa292X3No/dXR0ZXJzdG9jay50/eWlzdGkuanBn'
  ]

  return (
    <Styled.Root className={className}>
      <HorizontalScroll>
        {list.map((src, index) => (
          <Container key={index}>
            <Styled.Slide>
              <Styled.SlideImage src={src} />
            </Styled.Slide>
          </Container>
        ))}
      </HorizontalScroll>
    </Styled.Root>
  )
}

export default CityInfoGallery
