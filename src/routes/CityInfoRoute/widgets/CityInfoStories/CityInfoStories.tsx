import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'
import { CellWrapper } from './styles'
import Story from 'src/components/Story/Story'

interface CityInfoStoriesProps {
  className?: string
}

const CityInfoStories: FC<CityInfoStoriesProps> = ({ className }) => {
  const list = [
    'https://a.wattpad.com/useravatar/_Alone_Angel_14.256.232424.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSrtzBgrGhPiBoIbkneRdWEV-DNGHUxnaDA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_LpCjakTxfRWN2E6tSZqB_ZB9ILgFeVoEQ&usqp=CAU',
      'https://c-cl.cdn.smule.com/rs-z-sf-1/account/picture/76/67/e921f266-a2ce-43a0-9172-28d8fafae298.jpg',
      'https://i.pinimg.com/474x/d7/13/81/d7138112cc9e4c5a0f07e76928322bc1.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_LpCjakTxfRWN2E6tSZqB_ZB9ILgFeVoEQ&usqp=CAU',
      'https://up.quizlet.com/1krtdn-AatKe-256s.jpg',
      'https://a.wattpad.com/useravatar/_Alone_Angel_14.256.232424.jpg',
      'https://i.pinimg.com/474x/d7/13/81/d7138112cc9e4c5a0f07e76928322bc1.jpg',
      'https://c-cl.cdn.smule.com/rs-z-sf-1/account/picture/76/67/e921f266-a2ce-43a0-9172-28d8fafae298.jpg',
      'https://up.quizlet.com/1krtdn-AatKe-256s.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvSrtzBgrGhPiBoIbkneRdWEV-DNGHUxnaDA&usqp=CAU'
  ]

  return (
    <Styled.Root className={className}>
      <Container>
        <Styled.Title>Истории в моментах</Styled.Title>
      </Container>
      <HorizontalScroll>
        {list.map(src => (
          <CellWrapper>
            <Story src={src} />
          </CellWrapper>
        ))}
      </HorizontalScroll>
    </Styled.Root>
  )
}

export default CityInfoStories
