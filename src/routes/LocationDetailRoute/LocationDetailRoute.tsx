import { FC } from 'react'
import * as Styled from './styles'
import PageHeaderButtonBack from '../../widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { route } from '../../hoc/route'
import { MODAL_NAMES, ROUTE_NAMES } from '../../router/constants'
import { getRandomList, getRandomLocation, getRandomPost } from '../../data/mocks'
import Container from '../../components/Container/Container'
import Button from '../../components/Button/Button'
import Separator from '../../components/Separator/Separator'
import { PostWrapper } from './styles'
import LocationCard from '../../widgets/LocationCard/LocationCard'
import Counter from '../NotificationsRoute/components/Counter/Counter'
import GroupWrapper from '../../widgets/GroupWrapper/GroupWrapper'
import { useModal } from '../../hooks/useModal'
import { CreatePostsModalContext } from '../../modals/CreatePostModal/CreatePostModal'

interface LocationDetailRouteProps {
  className?: string
}

const LocationDetailRoute: FC<LocationDetailRouteProps> = ({ className }) => {
  const { open, close } = useModal<CreatePostsModalContext>(MODAL_NAMES.postCreate)

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
          <Styled.Action icon='share' size='m' mode='secondary'>
            Share
          </Styled.Action>
        </Styled.Actions>

        <Separator icon='lightning' />
        <GroupWrapper title='Connections' counter={<Counter mode='accent'>{15}</Counter>}>
          {posts.map((post, index) => (
            <Styled.PostWrapper
              key={index}
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
