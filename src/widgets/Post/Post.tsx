import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import DisplayText from 'src/widgets/DisplayText/DisplayText'
import Link from 'src/widgets/Link/Link'
import DateFormatter from "../../components/DateFormatter/DateFormatter";

interface PostProps {
  className?: string
  slug: string
  target: ReactNode
  header?: ReactNode
  content?: string
  connectionsCount: number
  commentCount: number
  createdAt?: number | string
  parent?: {
    userName: string
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
  onConnect(): void
}

const Post: FC<PostProps> = ({
  className,
  target,
  header,
  slug,
  selfActions,
  content,
  parent,
  connectionsCount,
  commentCount,
    createdAt,
  onConnect
}) => {
  return (
    <Styled.Root className={className} hasRefer={!!parent}>
      {!!parent && (
        <Link type='user' effect='none' userSlug={parent.userName}>
          <Styled.Connected>
            <DisplayText>Connected from @{parent.userName}</DisplayText>
          </Styled.Connected>
        </Link>
      )}
      <Styled.Body hasHeader={!!header}>
        {!!header && <Styled.Header>{header}</Styled.Header>}

        <Link type='post' postSlug={slug}>
          <Styled.Text>{content}</Styled.Text>
          <Styled.Date>
            <DateFormatter date={createdAt} format='default'/>
            </Styled.Date>
        </Link>
        <Styled.Target>{target}</Styled.Target>
        <Styled.Actions>
          <Styled.Action icon='lightning' isActive={selfActions?.hasConnect} onClick={onConnect}>
            {connectionsCount}
          </Styled.Action>
          <Styled.Action icon='message-circle'>{commentCount}</Styled.Action>
          <Styled.Action icon='heart' isActive={selfActions?.hasLike}>
            5
          </Styled.Action>
        </Styled.Actions>
      </Styled.Body>
    </Styled.Root>
  )
}

export default Post
