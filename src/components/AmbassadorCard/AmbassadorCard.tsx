import { FC } from 'react'
import * as Styled from './styles'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'
import Container from 'src/components/Container/Container'
import SubscribeContainer from 'src/widgets/SubscribeContainer/SubscribeContainer'
import SubscribeButton from 'src/widgets/SubscribeContainer/components/SubscribeButton/SubscribeButton'

interface AmbassadorCardProps {
  _id?: string
  title: string
  description?: string
  className?: string
}

const AmbassadorCard: FC<AmbassadorCardProps> = ({ className, _id, title, description }) => {
  return (
    <Styled.Root className={className}>
      <Styled.AvatarWrapper>
        <CommonLogo src='https://a.wattpad.com/useravatar/_Alone_Angel_14.256.232424.jpg' size={60} withRadius />
      </Styled.AvatarWrapper>
      <Container>
        <Styled.Name>{title}</Styled.Name>
        <Styled.Description>{description}</Styled.Description>
      </Container>
      <SubscribeContainer targetId={_id}>
        {({ isFollowing, onClick }) => <SubscribeButton isFollowing={isFollowing} onClick={onClick} />}
      </SubscribeContainer>
    </Styled.Root>
  )
}

export default AmbassadorCard
