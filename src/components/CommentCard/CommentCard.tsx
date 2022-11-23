import { FC } from 'react'
import * as Styled from './styles'
import UserHeader from '../UserHeader/UserHeader'
import Username from '../Username/Username'

interface CommentCardProps {
  className?: string
}

const CommentCard: FC<CommentCardProps> = ({ className, children }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Header>
        <UserHeader firstName='Arthur' lastName='Abeltinsh' username='fireworksx' />
        <Styled.Date>2h ago</Styled.Date>
      </Styled.Header>
      {children && <Styled.Body>{children}</Styled.Body>}
    </Styled.Root>
  )
}

export default CommentCard
