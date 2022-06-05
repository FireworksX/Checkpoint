import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import { LinkProps } from 'src/widgets/Link/Link'
import { BaseUser } from 'src/interfaces/User'
import Username from 'src/components/Username/Username'
import { buildFullName } from 'src/utils/buildFullName'
import { useInitialAvatarPlaceholder } from 'src/widgets/Avatar/hooks/useInitialAvatarPlaceholder'

interface UserRowCardProps extends Pick<BaseUser, 'username' | 'firstName' | 'lastName' | 'phone'> {
  appLinkProps?: LinkProps
  className?: string
}

const UserRowCard: FC<UserRowCardProps> = ({ className, username, firstName, lastName, phone, appLinkProps }) => {
  const avatarText = useInitialAvatarPlaceholder({ username, firstName, lastName })

  return (
    <Styled.Root className={className} {...appLinkProps}>
      <Styled.AvatarComponent uniqueId={phone}>{avatarText}</Styled.AvatarComponent>
      <div>
        <Styled.Title>
          <Username>{username}</Username>
        </Styled.Title>
        <Styled.Description>{buildFullName(firstName, lastName)}</Styled.Description>
      </div>
    </Styled.Root>
  )
}

export default UserRowCard
