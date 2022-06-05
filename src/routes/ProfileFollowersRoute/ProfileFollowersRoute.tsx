import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { useProfileFollowersRoute } from './hooks/useProfileFollowersRoute'

interface ProfileRouteProps {
  className?: string
}

const ProfileFollowersRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { user, followers } = useProfileFollowersRoute()

  return (
    <Styled.Root className={className}>
      <Styled.Header left={<PageHeaderButtonBack />}>
        <Styled.HeaderTitle>@{user?.username}</Styled.HeaderTitle>
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

export default route(withValidateUser(ProfileFollowersRoute), ROUTE_NAMES.profileFollowers)
