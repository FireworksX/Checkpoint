import { FC } from 'react'
import * as Styled from './styles'
import { BaseUser } from 'src/interfaces/User'
import { useInitialAvatarPlaceholder } from 'src/widgets/Avatar/hooks/useInitialAvatarPlaceholder'
import { buildFullName } from 'src/utils/buildFullName'

interface UserHeaderProps extends Pick<BaseUser, 'firstName' | 'lastName' | 'phone' | 'bio' | 'username' | 'verify'> {
  className?: string
}

const UserHeader: FC<UserHeaderProps> = ({ className, bio, firstName, lastName, verify, username, phone }) => {
  const avatarText = useInitialAvatarPlaceholder({ username, firstName, lastName })

  return (
    <Styled.Root className={className}>
      <Styled.AvatarComponent uniqueId={phone}>{avatarText}</Styled.AvatarComponent>
      <Styled.NameWrapper>
        <Styled.Name>
          {buildFullName(firstName, lastName)}
          {verify && <Styled.VerifyIcon />}
        </Styled.Name>
        <Styled.Description>{bio}</Styled.Description>
      </Styled.NameWrapper>
    </Styled.Root>
  )
}

export default UserHeader
