import { FC } from 'react'
import * as Styled from './styles'
import { buildFullName } from '../../utils/buildFullName'
import Username from "../Username/Username";

interface UserHeaderProps {
  firstName?: string
  lastName?: string
  username?: string
  description?: string
  className?: string
  verify?: boolean
}

const UserHeader: FC<UserHeaderProps> = ({ className, firstName, lastName, verify, description, username }) => {
  const hasDescription = description || username

  return (
    <Styled.Root className={className}>
      <Styled.Avatar size={44} />
      <div>
        <Styled.Head>
          {buildFullName(firstName, lastName)} {verify && <Styled.VerifyIcon />}
        </Styled.Head>
        {hasDescription && <Styled.Description>{description || <Username>{username}</Username>}</Styled.Description>}
      </div>
    </Styled.Root>
  )
}

export default UserHeader
