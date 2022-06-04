import { FC } from 'react'
import * as Styled from './styles'

interface UserRowCardProps {
  title?: string
  description?: string
  avatar?: string
  className?: string
}

const UserRowCard: FC<UserRowCardProps> = ({ className, avatar, title, description }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Avatar src={avatar} />
      <div>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </div>
    </Styled.Root>
  )
}

export default UserRowCard
