import { FC } from 'react'
import * as Styled from './styles'
import UserHeader from '../UserHeader/UserHeader'
import { DisplayTextType } from '../../widgets/DisplayText/DisplayText'

interface CommentCardProps {
  className?: string
  children: DisplayTextType
  user: {
    avatar?: string
    verify?: boolean
    firstName?: string
    lastName?: string
    username?: string
  }
}

const CommentCard: FC<CommentCardProps> = ({ className, user, children }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Header>
        <UserHeader
          avatar={user.avatar}
          verify={user.verify}
          firstName={user.firstName}
          lastName={user.lastName}
          username={user.username}
        />
        <Styled.Date>2h ago</Styled.Date>
      </Styled.Header>
      {children && <Styled.Body>{children}</Styled.Body>}
    </Styled.Root>
  )
}

export default CommentCard
