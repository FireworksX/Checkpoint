import { FC } from 'react'
import * as Styled from './styles'
import { route } from '../../hoc/route'
import { MODAL_NAMES, ROUTE_NAMES } from '../../router/constants'
import Container from '../../components/Container/Container'
import LocationCard from '../../widgets/LocationCard/LocationCard'
import Button from '../../components/Button/Button'
import { Actions } from './styles'
import Separator from '../../components/Separator/Separator'
import GroupWrapper from '../../widgets/GroupWrapper/GroupWrapper'
import CommentCard from '../../components/CommentCard/CommentCard'
import Counter from '../NotificationsRoute/components/Counter/Counter'
import { useModal } from '../../hooks/useModal'
import { LocationFieldsModalContext } from '../../modals/LocationFieldsModal/LocationFieldsModal'
import { getRandomPost } from '../../data/mocks'
import isBrowser from '../../utils/isBrowser'
import Link from '../../widgets/Link/Link'
import PageHeaderButtonBack from '../../widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import {CreatePostsModalContext} from "../../modals/CreatePostModal/CreatePostModal";

interface PostDetailRouteProps {
  className?: string
}

const PostDetailRoute: FC<PostDetailRouteProps> = ({ className }) => {
  const { open, close } = useModal<CreatePostsModalContext>(MODAL_NAMES.postCreate)

  const post = getRandomPost()
  const refer = post.refer

  if (!isBrowser) {
    return null
  }

  return (
    <Styled.Root className={className} headerLeft={<PageHeaderButtonBack />} title='Post'>
      <Container>
        {refer && isBrowser && (
          <Styled.ConnectedSection>Connected from @{refer.user?.username}</Styled.ConnectedSection>
        )}
        <div />

        <Link type='user' userSlug={post.user?.username || ''}>
          <Styled.Header
            hasRefer={!!refer}
            verify={post.user?.verify}
            avatar={post.user?.avatar}
            firstName={post.user?.firstName}
            lastName={post.user?.lastName}
            username={post.user?.username}
          />
        </Link>

        <Styled.Text>{post.content}</Styled.Text>
        <Styled.Date>10:06 - Nov 23, 2022</Styled.Date>

        <Styled.Target type='location' locationSlug='testLocation'>
          <LocationCard
            name={post.target?.name || ''}
            location={post.target?.location || ''}
            avatar={post.target?.logo}
          />
        </Styled.Target>

        <Styled.Metrics>
          <Styled.Metric>
            <span>{post.metrics.connections}</span> Connections
          </Styled.Metric>
          <Styled.Metric>
            <span>{post.metrics.likes}</span> Likes
          </Styled.Metric>
        </Styled.Metrics>

        <Button size='l' icon='lightning' stretched onClick={() => open({
          onCancel: close
        })}>
          Connect
        </Button>

        <Styled.Actions>
          <Styled.Action icon='map-pin-alt' size='m' mode='secondary'>
            Show on map
          </Styled.Action>
          <Styled.Action icon='heart' size='m' mode='secondary'>
            Like
          </Styled.Action>
          <Styled.Action icon='share' size='m' mode='secondary'>
            Share
          </Styled.Action>
        </Styled.Actions>

        <Separator icon='message-circle' />

        <GroupWrapper title='Comments' counter={<Counter mode='accent'>{post.metrics.comments}</Counter>}>
          {post.comments.map((comment, index) => (
            <Styled.Comment key={index} user={comment.user}>
              {comment.content}
            </Styled.Comment>
          ))}
        </GroupWrapper>
      </Container>
    </Styled.Root>
  )
}

export default route(PostDetailRoute, ROUTE_NAMES.postDetail)
