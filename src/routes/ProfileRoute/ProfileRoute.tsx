import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import { useProfileRoute } from './hooks/useProfileRoute'
import Icon from 'src/components/Icon/Icon'
import Container from 'src/components/Container/Container'
import UserHeader from 'src/widgets/UserHeader/UserHeader'
import Link from 'src/widgets/Link/Link'
import PageHeaderButton from '../../widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import Username from '../../components/Username/Username'
import { useUserHeaderCounters } from '../../widgets/UserHeader/hooks/useUserHeaderCounters'
import LocationCard from "../../widgets/LocationCard/LocationCard";

interface ProfileRouteProps {
  className?: string
}

const ProfileRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { user, posts, fetching } = useProfileRoute()
  const counters = useUserHeaderCounters(user?.counters || {})

  console.log(posts);

  // const posts = getRandomList(random(3, 35), getRandomPost)

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
            slug={post.id}
            // author={user}
            refer={post.refer}
            content={post.text}
            commentCount={post.commentCount}
            connectionsCount={post.connectionsCount}
            target={
              <Link type='location' locationSlug={post.place.googleId}>
                <LocationCard name={post.place.name} location={post.place.address} />
              </Link>
            }
            createdAt={post.createdAt}
            parent={post.parent}
            selfActions={post.selfActions}
          />
        ))}
      </Container>

      <Styled.Create />
    </Styled.Root>
  )
}

export default route(ProfileRoute, ROUTE_NAMES.profileReview)
