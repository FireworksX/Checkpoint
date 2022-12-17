import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import DisplayText from 'src/widgets/DisplayText/DisplayText'
import { MockUser } from '../../data/mocks'
import Link from 'src/widgets/Link/Link'

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
  return (
    <Styled.Root className={className} hasRefer={!!refer}>
      {!!refer && (
        <Link type='user' effect='none' userSlug={refer.user.userName}>
          <Styled.Connected>
            <DisplayText>Connected from @{refer.user.userName}</DisplayText>
          </Styled.Connected>
        </Link>
      )}
      <Styled.Body hasHeader={!!header}>
        {!!header && <Styled.Header>{header}</Styled.Header>}

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
