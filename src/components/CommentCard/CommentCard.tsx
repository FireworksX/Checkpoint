import { FC } from 'react'
import * as Styled from './styles'
import UserHeader from '../UserHeader/UserHeader'
import { DisplayTextType } from '../../widgets/DisplayText/DisplayText'
import Link from '../../widgets/Link/Link'

interface CommentCardProps {
  className?: string
  children: DisplayTextType
  user: {
    avatar?: string
    verify?: boolean
    firstName?: string
    lastName?: string
    userName: string
  }
}

const CommentCard: FC<CommentCardProps> = ({ className, user, children }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Header>
        <Link type='user' userSlug={user.userName}>
          <UserHeader
            avatar={user.avatar}
            verify={user.verify}
            firstName={user.firstName}
            lastName={user.lastName}
            userName={user.userName}
          />
        </Link>

        <Styled.Date>2h ago</Styled.Date>
      </Styled.Header>
      {children && <Styled.Body>{children}</Styled.Body>}
    </Styled.Root>
  )
}

export default CommentCard
