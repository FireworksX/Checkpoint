import { FC } from 'react'
import * as Styled from './styles'
import { staticImagesMap } from 'src/data/staticImagesMap'

interface RatingFieldViewProps {
  className?: string
}

const RatingFieldView: FC<RatingFieldViewProps> = ({ className }) => {
  const list = [
    {
      image: staticImagesMap.perseveringFace,
      value: 3
    },
    {
      image: staticImagesMap.slightlyFrowningFace,
      value: 0
    },
    {
      image: staticImagesMap.neutralFace,
      value: 20
    },
    {
      image: staticImagesMap.slightlySmilingFace,
      value: 44
    },
    {
      image: staticImagesMap.grinningFaceWithSmilingEyes,
      value: 532
    }
  ]

  return (
    <Styled.Root className={className}>
      <Styled.RatingGrid>
        {list.map((el, index) => (
          <Styled.CellWrapper key={index}>
            <Styled.Cell>
              <Styled.CellImage src={el.image} />
            </Styled.Cell>
            <Styled.CellValue>{el.value}</Styled.CellValue>
          </Styled.CellWrapper>
        ))}
      </Styled.RatingGrid>
    </Styled.Root>
  )
}

export default RatingFieldView
