import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { useUserRoute } from './hooks/useUserRoute'
import Container from 'src/components/Container/Container'
import Username from 'src/components/Username/Username'
import SubscribeContainer from 'src/widgets/SubscribeContainer/SubscribeContainer'
import UserHeader from 'src/widgets/UserHeader/UserHeader'
import { getRandomList, getRandomPost } from 'src/data/mocks'
import { random } from 'src/utils/random'
import LocationCard from 'src/widgets/LocationCard/LocationCard'
import ButtonStates from 'src/components/ButtonStates/ButtonStates'
import { useUserHeaderCounters } from '../../widgets/UserHeader/hooks/useUserHeaderCounters'

interface UserRouteProps {
  className?: string
}

const UserRoute: FC<UserRouteProps> = ({ className }) => {
  const { user, fetching } = useUserRoute()
  const counters = useUserHeaderCounters(user?.counters || {})

  const posts = getRandomList(random(3, 35), getRandomPost)


  return (
    <Styled.Root
      className={className}
      title={<Username>{user?.userName}</Username>}
      description='Profile'
      fetching={fetching}
      headerLeft={<PageHeaderButtonBack />}
    >
      <UserHeader
        avatar={user?.avatar}
        userName={user?.userName}
        firstName={user?.firstName}
        lastName={user?.lastName}
        verify={user?.verify}
        bio={user?.bio}
        counters={counters}
        actions={
          <Styled.HeaderActions>
            <SubscribeContainer isSubscribing={user?.me?.isFollow} targetId={user?.userName}>
              {({ onClick }) => (
                <ButtonStates
                  size='l'
                  stretched
                  mode='secondary'
                  states={[{ children: 'Follow' }, { children: 'Following' }]}
                  stateIndex={user?.me?.isFollow ? 1 : 0}
                  onClick={onClick}
                />
              )}
            </SubscribeContainer>
          </Styled.HeaderActions>
        }
      />

      <Container>
        {posts.map((post, index) => (
          <Styled.PostWrapper
            key={index}
            slug={post.slug}
            author={user}
            refer={post.refer}
            content={post.content}
            metrics={post.metrics}
            target={<LocationCard name={post.target?.name} location={post.target?.location} />}
            selfActions={post.selfActions}
          />
        ))}
      </Container>
    </Styled.Root>
  )
}

export default route(UserRoute, ROUTE_NAMES.userReview)
