import { FC } from 'react'
import * as Styled from './styles'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'
import Container from 'src/components/Container/Container'
import SubscribeContainer from 'src/widgets/SubscribeContainer/SubscribeContainer'
import SubscribeButton from 'src/widgets/SubscribeContainer/components/SubscribeButton/SubscribeButton'
import { BaseUser } from 'src/interfaces/User'
import { buildFullName } from 'src/utils/buildFullName'
import Avatar from 'src/widgets/Avatar/Avatar'
import { useInitialAvatarPlaceholder } from 'src/widgets/Avatar/hooks/useInitialAvatarPlaceholder'

interface AmbassadorCardProps extends Pick<BaseUser, '_id' | 'username' | 'firstName' | 'lastName' | 'phone' | 'bio'> {
  className?: string
}

const AmbassadorCard: FC<AmbassadorCardProps> = ({ className, _id, firstName, lastName, username, phone, bio }) => {
  const avatarText = useInitialAvatarPlaceholder({ username, firstName, lastName })

  return (
    <Styled.Root className={className} type='user' userSlug={username || 'empty'}>
      <Styled.AvatarWrapper>
        <Avatar size={60} uniqueId={phone}>
          {avatarText}
        </Avatar>
      </Styled.AvatarWrapper>
      <Container>
        <Styled.Name>{buildFullName(firstName, lastName)}</Styled.Name>
        <Styled.Description>{bio}</Styled.Description>
      </Container>
      <SubscribeContainer targetId={_id}>{args => <SubscribeButton {...args} />}</SubscribeContainer>
    </Styled.Root>
  )
}

export default AmbassadorCard
