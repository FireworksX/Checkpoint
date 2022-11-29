import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { useUserRoute } from './hooks/useUserRoute'
import Container from 'src/components/Container/Container'
import Button from 'src/components/Button/Button'
import Placeholder from 'src/components/Placeholder/Placeholder'
import { staticImagesMap } from 'src/data/staticImagesMap'
import Username from 'src/components/Username/Username'
import SubscribeContainer from 'src/widgets/SubscribeContainer/SubscribeContainer'
import SubscribeButton from 'src/widgets/SubscribeContainer/components/SubscribeButton/SubscribeButton'
import { DEFAULT_ALL_CATEGORY } from '../ProfileRoute/hooks/useProfileRoute'
import Link from 'src/widgets/Link/Link'
import { useRouter } from 'src/hooks/useRouter'
import Spinner from 'src/components/Spinner/Spinner'
import UserHeader from '../../widgets/UserHeader/UserHeader'
import { HeaderActions, PostWrapper } from './styles'
import { getRandomList, getRandomPost, getRandomUser } from '../../data/mocks'
import { random } from '../../utils/random'
import Post from '../../widgets/Post/Post'
import LocationCard from '../../widgets/LocationCard/LocationCard'
import isBrowser from '../../utils/isBrowser'

interface UserRouteProps {
  className?: string
}

const UserRoute: FC<UserRouteProps> = ({ className }) => {
  const { citySlug } = useRouter()
  const {
    categories,
    locations,
    locationsFetching,
    userFetching,
    counters,
    userSlug,
    selectedCategory,
    setSelectedCategory
  } = useUserRoute()

  const user = getRandomUser()
  const posts = getRandomList(random(3, 35), getRandomPost)

  if (!isBrowser) {
    return null
  }

  return (
    <Styled.Root
      className={className}
      title={<Username>{user?.username}</Username>}
      description='Profile'
      headerLeft={<PageHeaderButtonBack />}
      fetching={userFetching}
    >
      <UserHeader
        avatar={user?.avatar}
        username={user?.username}
        firstName={user?.firstName}
        lastName={user?.lastName}
        verify={user?.verify}
        bio={user?.bio}
        actions={
          <Styled.HeaderActions>
            <Button size='l' mode='secondary' stretched>
              Follow
            </Button>
            <Button size='l' mode='secondary' stretched>
              Message
            </Button>
          </Styled.HeaderActions>
        }
      />

      <Styled.SubscribeContainer>
        <SubscribeContainer targetId={user?._id}>
          {({ isFollowing, onClick }) => (
            <SubscribeButton
              size='xl'
              icon='lightning'
              stretched
              labels={['Connecting', 'Connect']}
              isFollowing={isFollowing}
              onClick={onClick}
            />
          )}
        </SubscribeContainer>
      </Styled.SubscribeContainer>

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
