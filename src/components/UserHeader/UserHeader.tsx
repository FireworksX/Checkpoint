import { FC } from 'react'
import * as Styled from './styles'
import { buildFullName } from '../../utils/buildFullName'
import Username from '../Username/Username'
import { useInitialAvatarPlaceholder } from '../../widgets/Avatar/hooks/useInitialAvatarPlaceholder'

interface UserHeaderProps {
  firstName?: string
  lastName?: string
  userName?: string
  description?: string
  className?: string
  avatar?: string
  verify?: boolean
  hasAvatar?: boolean
}

const UserHeader: FC<UserHeaderProps> = ({
  className,
  avatar,
  hasAvatar = true,
  firstName,
  lastName,
  verify,
  description,
  userName
}) => {
  const hasName = firstName || lastName
  const hasDescription = description || userName
  const initialText = useInitialAvatarPlaceholder({
    firstName,
    lastName,
    userName
  })

  const uniqueId = userName || firstName || lastName

  return (
    <Styled.Root className={className}>
      {hasAvatar && (
        <Styled.Avatar src={avatar} size={44} uniqueId={uniqueId}>
          {initialText}
        </Styled.Avatar>
      )}
      <div>
        <Styled.Head>
          {hasName ? buildFullName(firstName, lastName) : <Username>{userName}</Username>}
          {verify && <Styled.VerifyIcon />}
        </Styled.Head>
        {hasDescription && (
          <Styled.Description>{description || (hasName && <Username>{userName}</Username>)}</Styled.Description>
        )}
      </div>
    </Styled.Root>
  )
}

export default UserHeader
