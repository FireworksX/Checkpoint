import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'

interface CityInfoStoriesProps {
  className?: string
}

const CityInfoStories: FC<CityInfoStoriesProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Container>
        <Styled.Title>Истории в моментах</Styled.Title>
      </Container>
    </Styled.Root>
  )
}

export default CityInfoStories
