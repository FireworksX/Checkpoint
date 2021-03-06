import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { useUserFollowersRoute } from './hooks/useUserFollowersRoute'
import Username from 'src/components/Username/Username'

interface ProfileRouteProps {
  className?: string
}

const UserFollowersRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { user, followers } = useUserFollowersRoute()

  return (
    <Styled.Root className={className}>
      <Styled.Header left={<PageHeaderButtonBack />}>
        <Styled.HeaderTitle>
          <Username>{user?.username}</Username>
        </Styled.HeaderTitle>
      </Styled.Header>

      <Styled.Wrapper>
        {followers?.map(follower => (
          <Styled.UserCard
            key={follower._id}
            username={follower?.username}
            firstName={follower?.firstName}
            lastName={follower?.lastName}
            verify={follower?.verify}
            phone={follower?.phone}
            appLinkProps={{
              type: 'user',
              userSlug: follower.username!
            }}
          />
        ))}
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default route(withValidateUser(UserFollowersRoute), ROUTE_NAMES.userFollowers)
