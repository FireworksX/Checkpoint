import { FC, useState } from 'react'
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
import ConnectContainer from '../../widgets/ConnectContainer/ConnectContainer'
import { useToggle } from 'react-use'
import ButtonStates from '../../components/ButtonStates/ButtonStates'

interface UserRouteProps {
  className?: string
}

const UserRoute: FC<UserRouteProps> = ({ className }) => {
  const { citySlug } = useRouter()
  const [isConnecting, setIsConnecting] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)

  const { user } = useUserRoute()

  const posts = getRandomList(random(3, 35), getRandomPost)

  if (!isBrowser) {
    return null
  }

  return (
    <Styled.Root
      className={className}
      title={<Username>{user?.userName}</Username>}
      description='Profile'
      headerLeft={<PageHeaderButtonBack />}
    >
      <UserHeader
        avatar={user?.avatar}
        userName={user?.userName}
        firstName={user?.firstName}
        lastName={user?.lastName}
        verify={user?.verify}
        bio={user?.bio}
        actions={
          <Styled.HeaderActions>
            <SubscribeContainer isSubscribing={isFollowing} targetId={user?.userName}>
              {({ onClick }) => (
                <ButtonStates
                  size='l'
                  stretched
                  mode='secondary'
                  states={[{ children: 'Follow' }, { children: 'Following' }]}
                  stateIndex={isFollowing ? 1 : 0}
                  onClick={async e => {
                    setIsFollowing(await onClick(e))
                  }}
                />
              )}
            </SubscribeContainer>
            <Button size='l' mode='secondary' stretched>
              Message
            </Button>
          </Styled.HeaderActions>
        }
      />

      <Styled.SubscribeContainer>
        <ConnectContainer isConnecting={isConnecting} targetId={user?.userName}>
          {({ onClick }) => (
            <ButtonStates
              icon='lightning'
              size='xl'
              stretched
              states={[
                { children: 'Connect', mode: 'primary' },
                { children: 'Connecting', mode: 'secondary' }
              ]}
              stateIndex={isConnecting ? 1 : 0}
              onClick={async e => {
                const res = await onClick(e)
                setIsConnecting(res)
              }}
            />
          )}
        </ConnectContainer>
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
