import { FC } from 'react'
import * as Styled from './styles'
import { LinkProps } from 'src/widgets/Link/Link'
import { buildFullName } from 'src/utils/buildFullName'
import { useInitialAvatarPlaceholder } from 'src/widgets/Avatar/hooks/useInitialAvatarPlaceholder'

interface UserRowCardProps {
  userName: string
  firstName?: string
  lastName?: string
  verify?: boolean
  appLinkProps?: LinkProps
  className?: string
}

const UserRowCard: FC<UserRowCardProps> = ({ className, userName, firstName, verify, lastName, appLinkProps }) => {
  const avatarText = useInitialAvatarPlaceholder({ userName, firstName, lastName })

  return (
    <Styled.Root className={className} {...appLinkProps}>
      <Styled.AvatarComponent uniqueId={userName}>{avatarText}</Styled.AvatarComponent>
      <div>
        <Styled.Title>
          {buildFullName(firstName, lastName)}
          {verify && <Styled.VerifyIcon />}
        </Styled.Title>
        <Styled.Description>{userName}</Styled.Description>
      </div>

      <Styled.FollowButton>{/*<SubscribeButton isFollowing/>*/}</Styled.FollowButton>
    </Styled.Root>
  )
}

export default UserRowCard
