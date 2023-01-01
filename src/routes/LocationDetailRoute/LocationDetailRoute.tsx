import { FC } from 'react'
import * as Styled from './styles'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { route } from 'src/hoc/route'
import { MODAL_NAMES, ROUTE_NAMES } from 'src/router/constants'
import { getRandomList, getRandomLocation, getRandomPost } from 'src/data/mocks'
import Container from 'src/components/Container/Container'
import Button from 'src/components/Button/Button'
import Separator from 'src/components/Separator/Separator'
import Counter from '../NotificationsRoute/components/Counter/Counter'
import GroupWrapper from 'src/widgets/GroupWrapper/GroupWrapper'
import { useModal } from 'src/hooks/useModal'
import { CreatePostsModalContext } from 'src/modals/CreatePostModal/CreatePostModal'
import Link from '../../widgets/Link/Link'
import UserHeader from '../../components/UserHeader/UserHeader'
import {useShare} from "../../hooks/useShare";

interface LocationDetailRouteProps {
  className?: string
}

const LocationDetailRoute: FC<LocationDetailRouteProps> = ({ className }) => {
  const { open, close } = useModal<CreatePostsModalContext>(MODAL_NAMES.postCreate)
  const {share, isAvailable} = useShare()

  const location = getRandomLocation()
  const posts = getRandomList(17, getRandomPost)

  return (
    <Styled.Root className={className} headerLeft={<PageHeaderButtonBack />} title='Location'>
      <Container>
        <Styled.Header avatar={location?.logo} firstName={location?.name} description={location?.location} />
        <Styled.Metrics>
          <Styled.Metric>
            <span>{15}</span> Connections
          </Styled.Metric>
          <Styled.Metric>
            <span>{150}</span> Likes
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
          <Styled.Action icon='heart' size='m' mode='secondary'>
            Like
          </Styled.Action>
          {isAvailable && <Styled.Action icon='share' size='m' mode='secondary' onClick={share}>
            Share
          </Styled.Action>}
        </Styled.Actions>

        <Separator icon='lightning' />
        <GroupWrapper title='Connections' counter={<Counter mode='accent'>{15}</Counter>}>
          {posts.map((post, index) => (
            <Styled.PostWrapper
              key={index}
              header={
                <Link type='user' userSlug={post.user.username}>
                  <UserHeader
                    verify={post.user.verify}
                    avatar={post.user.avatar}
                    username={post.user.username}
                    firstName={post.user.firstName}
                    lastName={post.user.lastName}
                    description='2h ago'
                  />
                </Link>
              }
              slug={post.slug}
              author={post.user}
              content={post.content}
              metrics={post.metrics}
              selfActions={post.selfActions}
            />
          ))}
        </GroupWrapper>
      </Container>
    </Styled.Root>
  )
}

export default route(LocationDetailRoute, ROUTE_NAMES.locationDetail)
