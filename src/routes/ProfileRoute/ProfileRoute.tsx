import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import { useProfileRoute } from './hooks/useProfileRoute'
import Icon from 'src/components/Icon/Icon'
import Container from 'src/components/Container/Container'
import UserHeader from 'src/widgets/UserHeader/UserHeader'
import Link from 'src/widgets/Link/Link'
import LocationCard from '../../widgets/LocationCard/LocationCard'
import PageHeaderButton from '../../widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import Username from '../../components/Username/Username'
import { getRandomList, getRandomPost } from '../../data/mocks'
import { random } from '../../utils/random'
import { useUserHeaderCounters } from '../../widgets/UserHeader/hooks/useUserHeaderCounters'

interface ProfileRouteProps {
  className?: string
}

const ProfileRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { user, fetching } = useProfileRoute()
  const counters = useUserHeaderCounters(user?.counters || {})

  const posts = getRandomList(random(3, 35), getRandomPost)

  return (
    <Styled.Root
      className={className}
      fetching={fetching}
      title={<Username>{user?.userName}</Username>}
      description='Profile'
      headerRight={
        <Link type='profileSettings'>
          <PageHeaderButton>
            <Icon name='settings' />
          </PageHeaderButton>
        </Link>
      }
    >
      <UserHeader
        avatar={user?.avatar}
        userName={user?.userName}
        firstName={user?.firstName}
        lastName={user?.lastName}
        verify={user?.verify}
        bio={user?.bio}
        counters={counters}
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
            target={
              <Link type='location' locationSlug={post.target.slug}>
                <LocationCard avatar={post.target.logo} name={post.target?.name} location={post.target?.location} />
              </Link>
            }
            selfActions={post.selfActions}
          />
        ))}
      </Container>

      <Styled.Create />
    </Styled.Root>
  )
}

export default route(ProfileRoute, ROUTE_NAMES.profileReview)
