import { FC } from 'react'
import * as Styled from './styles'
import { staticImagesMap } from 'src/data/staticImagesMap'

interface ProsAndConsFieldVIewProps {
  cons: string[]
  pros: string[]
  className?: string
}

const ProsAndConsFieldVIew: FC<ProsAndConsFieldVIewProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Title>
        <Styled.TitleIcon src={staticImagesMap.thumbsUp} />
        Плюсы
      </Styled.Title>
    </Styled.Root>
  )
}

export default ProsAndConsFieldVIew
