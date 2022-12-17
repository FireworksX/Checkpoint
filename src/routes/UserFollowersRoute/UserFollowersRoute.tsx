import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { useUserFollowersRoute } from './hooks/useUserFollowersRoute'
import Username from 'src/components/Username/Username'

interface ProfileRouteProps {
  className?: string
}

const UserFollowersRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { user, followers } = useUserFollowersRoute()

  return (
    <Styled.Root
      className={className}
      title={<Username>{user?.userName}</Username>}
      headerLeft={<PageHeaderButtonBack />}
      description='Followers'
    >
      <Styled.Wrapper>
        {followers?.map(follower => (
          <Styled.UserCard
            key={follower._id}
            userName={follower?.userName}
            firstName={follower?.firstName}
            lastName={follower?.lastName}
            verify={follower?.verify}
            phone={follower?.phone}
            appLinkProps={{
              type: 'user',
              userSlug: follower.userName!
            }}
          />
        ))}
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default route(UserFollowersRoute, ROUTE_NAMES.userFollowers)
