import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import SubscribeContainer from 'src/widgets/SubscribeContainer/SubscribeContainer'
import SubscribeButton from 'src/widgets/SubscribeContainer/components/SubscribeButton/SubscribeButton'
import { BaseUser } from 'src/interfaces/User'
import { buildFullName } from 'src/utils/buildFullName'
import Avatar from 'src/widgets/Avatar/Avatar'
import { useInitialAvatarPlaceholder } from 'src/widgets/Avatar/hooks/useInitialAvatarPlaceholder'

interface AmbassadorCardProps extends Pick<BaseUser, '_id' | 'userName' | 'firstName' | 'lastName' | 'phone' | 'bio'> {
  className?: string
}

const AmbassadorCard: FC<AmbassadorCardProps> = ({ className, _id, firstName, lastName, userName, phone, bio }) => {
  const avatarText = useInitialAvatarPlaceholder({ userName, firstName, lastName })

  return (
    <Styled.Root className={className} type='user' userSlug={userName || 'empty'}>
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
