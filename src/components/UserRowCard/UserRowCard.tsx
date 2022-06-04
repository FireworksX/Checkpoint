import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import { LinkProps } from 'src/widgets/Link/Link'

interface UserRowCardProps {
  title?: ReactNode
  description?: string
  avatar?: string
  appLinkProps?: LinkProps
  className?: string
}

const UserRowCard: FC<UserRowCardProps> = ({ className, avatar, appLinkProps, title, description }) => {
  return (
    <Styled.Root className={className} {...appLinkProps}>
      <Styled.Avatar src={avatar} />
      <div>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </div>
    </Styled.Root>
  )
}

export default UserRowCard
