import { FC, useEffect, useRef } from 'react'
import * as Styled from './styles'
import { route } from '../../hoc/route'
import { MODAL_NAMES, ROUTE_NAMES } from '../../router/constants'
import Container from '../../components/Container/Container'
import LocationCard from '../../widgets/LocationCard/LocationCard'
import Button from '../../components/Button/Button'
import Separator from '../../components/Separator/Separator'
import { useModal } from '../../hooks/useModal'
import PageHeaderButtonBack from '../../widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { useRouter } from '../../hooks/useRouter'
import GroupWrapper from '../../widgets/GroupWrapper/GroupWrapper'
import Counter from '../NotificationsRoute/components/Counter/Counter'
import { useShare } from '../../hooks/useShare'
import {usePostDetailRoute} from "./hooks/usePostDetailRoute";
import Link from "../../widgets/Link/Link";

interface PostDetailRouteProps {
  className?: string
}

const PostDetailRoute: FC<PostDetailRouteProps> = ({ className }) => {
  const commentsSectionRef = useRef<HTMLDivElement>()
  const { open, close } = useModal(MODAL_NAMES.postCreate)
  const { getParam, route } = useRouter()
  const { isAvailable, share } = useShare()

  const {text, parent, commentCount, connectionsCount, place, postSlug, user, fetching} = usePostDetailRoute()

  const comments = []

  useEffect(() => {
    setTimeout(() => {
      if ('comments' in route.params) {
        const offset = commentsSectionRef?.current?.getBoundingClientRect()?.top

        if (offset) {
          window.scrollTo(0, offset)
        }
      }
    }, 100)

  }, [route.params])

  return (
    <Styled.Root className={className} fetching={fetching} hiddenBodyWhileFetching headerLeft={<PageHeaderButtonBack />} title='Post'>
      <Container>
        {parent && (
          <Styled.ConnectedSection>Connected from @{parent.userName}</Styled.ConnectedSection>
        )}
        <div />

        <Link type='user' userSlug={user?.userName || ''}>
          <Styled.Header
            hasRefer={!!parent}
            avatar={user?.avatar}
            firstName={user?.firstName}
            lastName={user?.lastName}
            userName={user?.userName}
          />
        </Link>


        <Styled.Text>{text}</Styled.Text>
        <Styled.Date>10:06 - Nov 23, 2022</Styled.Date>

        <Styled.Gallery/>

        {place && <Styled.Target type='location' locationSlug={place.googleId}>
          <LocationCard
            name={place.name}
            location={place.address}
          />
        </Styled.Target>}

        <Styled.Metrics>
          <Styled.Metric type='postConnections' postSlug={postSlug}>
            <span>{connectionsCount}</span> Connections
          </Styled.Metric>
          <Styled.Metric type='post' postSlug={postSlug}>
            <span>{commentCount}</span> Comments
          </Styled.Metric>
        </Styled.Metrics>

        <Button
          size='l'
          icon='lightning'
          stretched
          onClick={() =>
            open({
              onCancel: close
            })
          }
        >
          Connect
        </Button>

        <Styled.Actions>
          <Styled.Action icon='map-pin-alt' size='m' mode='secondary'>
            Show on map
          </Styled.Action>
          {/*<Styled.Action icon='heart' size='m' mode='secondary'>*/}
          {/*  Like*/}
          {/*</Styled.Action>*/}
          {isAvailable && (
            <Styled.Action icon='share' size='m' mode='secondary' onClick={share}>
              Share
            </Styled.Action>
          )}
        </Styled.Actions>

        <Separator icon='message-circle' />

        {/*<EmptyPlaceholder header='No comments yet'>Yet no one has left feedback on this place</EmptyPlaceholder>*/}
        <div ref={commentsSectionRef} />
        <GroupWrapper title='Comments' counter={<Counter mode='accent'>{commentCount}</Counter>}>
          {comments.map((comment, index) => (
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
