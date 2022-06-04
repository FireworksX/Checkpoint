import { FC } from 'react'
import * as Styled from './styles'

interface UserHeaderProps {
  name: string
  bio?: string
  className?: string
}

const UserHeader: FC<UserHeaderProps> = ({ className, name, bio }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Avatar src='https://avatars.githubusercontent.com/u/22668125?v=4' />
      <Styled.NameWrapper>
        <Styled.Name>
          {name}
          <Styled.VerifyIcon />
        </Styled.Name>
        <Styled.Description>{bio}</Styled.Description>
      </Styled.NameWrapper>
    </Styled.Root>
  )
}

export default UserHeader
