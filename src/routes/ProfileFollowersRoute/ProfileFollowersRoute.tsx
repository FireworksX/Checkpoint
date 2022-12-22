import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { useProfileFollowersRoute } from './hooks/useProfileFollowersRoute'
import Username from '../../components/Username/Username'

interface ProfileRouteProps {
  className?: string
}

const ProfileFollowersRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { user, list, fetching } = useProfileFollowersRoute()

  return (
    <Styled.Root
      className={className}
      fetching={fetching}
      headerLeft={<PageHeaderButtonBack />}
      description='Followers'
      title={<Username>{user?.userName}</Username>}
    >
      <Styled.Wrapper>
        {list?.map(follower => (
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

export default route(ProfileFollowersRoute, ROUTE_NAMES.profileFollowers)
