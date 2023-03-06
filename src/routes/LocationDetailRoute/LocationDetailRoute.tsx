import { FC } from 'react'
import * as Styled from './styles'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { route } from 'src/hoc/route'
import { MODAL_NAMES, ROUTE_NAMES } from 'src/router/constants'
import { getRandomLocation } from 'src/data/mocks'
import Container from 'src/components/Container/Container'
import Button from 'src/components/Button/Button'
import Separator from 'src/components/Separator/Separator'
import Counter from '../NotificationsRoute/components/Counter/Counter'
import GroupWrapper from 'src/widgets/GroupWrapper/GroupWrapper'
import { useModal } from 'src/hooks/useModal'
import { useShare } from '../../hooks/useShare'
import { useLocationDetailRoute } from './hooks/useLocationDetailRoute'

interface LocationDetailRouteProps {
  className?: string
}

const LocationDetailRoute: FC<LocationDetailRouteProps> = ({ className }) => {
  const { name, address, connections, onConnect } = useLocationDetailRoute()

  const { open, close } = useModal()
  const { share, isAvailable } = useShare()

  const location = getRandomLocation()

  return (
    <Styled.Root className={className} headerLeft={<PageHeaderButtonBack />} title='Location'>
      <Container>
        <Styled.Header avatar={location?.logo} firstName={name} description={address} />
        <Styled.Metrics>
          <Styled.Metric>
            <span>{connections.length}</span> Connections
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
            open(MODAL_NAMES.postCreate, {
              onCancel: close,
              onSubmit: onConnect
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
          {isAvailable && (
            <Styled.Action icon='share' size='m' mode='secondary' onClick={share}>
              Share
            </Styled.Action>
          )}
        </Styled.Actions>

        {connections.length > 0 && (
          <>
            <Separator icon='lightning' />
            <GroupWrapper title='Connections' counter={<Counter mode='accent'>{connections.length}</Counter>}>
              {connections.map((post, index) => (
                <Styled.PostWrapper
                  key={index}
                  slug={post.id}
                  // author={user}
                  refer={post.refer}
                  content={post.text}
                  commentCount={post.commentCount}
                  connectionsCount={post.connectionsCount}
                />
              ))}
            </GroupWrapper>
          </>
        )}
      </Container>
    </Styled.Root>
  )
}

export default route(LocationDetailRoute, ROUTE_NAMES.locationDetail)
