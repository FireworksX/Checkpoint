import { FC } from 'react'
import * as Styled from './styles'
import CommonLogo from '../CommonLogo/CommonLogo'
import Container from '../Container/Container'

interface AmbassadorCardProps {
  className?: string
}

const AmbassadorCard: FC<AmbassadorCardProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.AvatarWrapper>
        <CommonLogo src='https://a.wattpad.com/useravatar/_Alone_Angel_14.256.232424.jpg' size={60} withRadius />
      </Styled.AvatarWrapper>
      <Container>
        <Styled.Name>Александра</Styled.Name>
        <Styled.Description>Фотограф</Styled.Description>
        <Styled.Tags>
          <Styled.Tag>Фотография</Styled.Tag>
          <Styled.Tag>Природа</Styled.Tag>
          <Styled.Tag>Литература</Styled.Tag>
          <Styled.Tag>Бары и рестораны</Styled.Tag>
        </Styled.Tags>
      </Container>
      <Styled.Instagram>Инстаграм</Styled.Instagram>
    </Styled.Root>
  )
}

export default AmbassadorCard
