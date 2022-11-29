import { FC } from 'react'
import * as Styled from './styles'
import { buildFullName } from '../../utils/buildFullName'
import Username from '../Username/Username'
import {useInitialAvatarPlaceholder} from "../../widgets/Avatar/hooks/useInitialAvatarPlaceholder";

interface UserHeaderProps {
  firstName?: string
  lastName?: string
  username?: string
  description?: string
  className?: string
  avatar?: string
  verify?: boolean
}

const UserHeader: FC<UserHeaderProps> = ({ className, avatar, firstName, lastName, verify, description, username }) => {
  const hasName = firstName || lastName
  const hasDescription = description || username
  const initialText = useInitialAvatarPlaceholder({
    firstName,
    lastName,
    username
  })

  return (
    <Styled.Root className={className}>
      <Styled.Avatar src={avatar} size={44} uniqueId={username}>{initialText}</Styled.Avatar>
      <div>
        <Styled.Head>
          {hasName ? buildFullName(firstName, lastName) : <Username>{username}</Username>}
          {verify && <Styled.VerifyIcon />}
        </Styled.Head>
        {hasDescription && <Styled.Description>{description || (hasName && <Username>{username}</Username>)}</Styled.Description>}
      </div>
    </Styled.Root>
  )
}

export default UserHeader
