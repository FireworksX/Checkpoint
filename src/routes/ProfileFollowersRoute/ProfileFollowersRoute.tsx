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
            key={follower.id}
            avatar='https://avatars.githubusercontent.com/u/22668125?v=4'
            title={follower.username}
            description={[follower?.firstName, follower?.lastName].join(' ')}
          />
        ))}
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default route(withValidateUser(ProfileFollowersRoute), ROUTE_NAMES.profileFollowers)
