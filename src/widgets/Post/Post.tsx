import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import DisplayText from '../DisplayText/DisplayText'
import { MockUser } from '../../data/mocks'
import { random } from '../../utils/random'
import { useInitialAvatarPlaceholder } from '../Avatar/hooks/useInitialAvatarPlaceholder'
import Link from '../Link/Link'

interface PostProps {
  className?: string
  slug: string
  target: ReactNode
  header?: ReactNode
  content?: string
  author: MockUser
  refer?: {
    user: MockUser
  }
  metrics: {
    connections: number
    likes: number
    comments: number
  }
  selfActions: {
    hasConnect: boolean
    hasLike: boolean
  }
}

const Post: FC<PostProps> = ({ className, target, header, slug, selfActions, author, content, refer, metrics }) => {
  const authorRefer = useInitialAvatarPlaceholder(refer?.user)

  return (
    <Styled.Root className={className} hasRefer={!!refer}>
      {!!refer && (
        <Link type='user' effect='none' userSlug={refer.user.userName}>
          <Styled.Connected>
            <Styled.ConnectedAvatar size={20} uniqueId={refer.user.userName}>
              {authorRefer}
            </Styled.ConnectedAvatar>
            <DisplayText>Connected from @{refer.user.userName}</DisplayText>
          </Styled.Connected>
        </Link>
      )}
      <Styled.Body hasHeader={!!header}>
        {header}

        <Link type='post' postSlug={slug}>
          <Styled.Text>{content}</Styled.Text>
          <Styled.Date>10:06 - Nov 23, 2022</Styled.Date>
        </Link>
        <Styled.Target>{target}</Styled.Target>
        <Styled.Actions>
          <Styled.Action icon='lightning' isActive={selfActions?.hasConnect}>
            {metrics.connections}
          </Styled.Action>
          <Styled.Action icon='message-circle'>{metrics.comments}</Styled.Action>
          <Styled.Action icon='heart' isActive={selfActions?.hasLike}>
            {metrics.likes}
          </Styled.Action>
        </Styled.Actions>
      </Styled.Body>
    </Styled.Root>
  )
}

export default Post
