import { FC } from 'react'
import * as Styled from './styles'
import { AvatarComponent } from './styles'

interface UserHeaderProps {
  name: string
  avatar?: string
  avatarText?: string
  phone?: string
  bio?: string
  className?: string
}

const UserHeader: FC<UserHeaderProps> = ({ className, name, bio, avatar, avatarText, phone }) => {
  return (
    <Styled.Root className={className}>
      <Styled.AvatarComponent src={avatar} uniqueId={phone}>
        {avatarText}
      </Styled.AvatarComponent>
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
