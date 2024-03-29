import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import {MODAL_NAMES, ROUTE_NAMES} from 'src/router/constants'
import { useProfileRoute } from './hooks/useProfileRoute'
import Icon from 'src/components/Icon/Icon'
import Container from 'src/components/Container/Container'
import UserHeader from 'src/widgets/UserHeader/UserHeader'
import PostUserHeader from '../../components/UserHeader/UserHeader'

import Link from 'src/widgets/Link/Link'
import PageHeaderButton from '../../widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import Username from '../../components/Username/Username'
import { useUserHeaderCounters } from '../../widgets/UserHeader/hooks/useUserHeaderCounters'
import LocationCard from "../../widgets/LocationCard/LocationCard";
import Placeholder from "../../components/Placeholder/Placeholder";
import Spinner from "../../components/Spinner/Spinner";
import {useModal} from "../../hooks/useModal";

interface ProfileRouteProps {
  className?: string
}

const ProfileRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { user, posts, fetching, fetchingPosts } = useProfileRoute()
  const counters = useUserHeaderCounters(user?.counters || {})
  const {open} = useModal()

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
        {fetchingPosts && <Placeholder icon={<Spinner />} />}

        {posts.map((post, index) => (
          <Styled.PostWrapper
            key={index}
            slug={post.id}
            header={
              <PostUserHeader
                  avatar={post.user?.avatar}
                  firstName={post.user?.firstName}
                  lastName={post.user?.lastName}
                  userName={post.user?.userName}
              />
            }
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
            onHeaderAction={() => open(MODAL_NAMES.postActions, {
              onDelete: () => alert('delete'),
              onEdit: () => alert('delete'),
              onReport: () => alert('report')
            })}
          />
        ))}
      </Container>

      <Styled.Create />
    </Styled.Root>
  )
}

export default route(ProfileRoute, ROUTE_NAMES.profileReview)
