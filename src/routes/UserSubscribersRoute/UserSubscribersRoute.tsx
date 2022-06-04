import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { useUserSubscribersRoute } from './hooks/useUserSubscribersRoute'
import Username from 'src/components/Username/Username'

interface ProfileRouteProps {
  className?: string
}

const UserSubscribersRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { user, followers } = useUserSubscribersRoute()

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
            key={follower.id}
            avatar='https://avatars.githubusercontent.com/u/22668125?v=4'
            title={<Username>{follower?.username}</Username>}
            description={[follower?.firstName, follower?.lastName].join(' ')}
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

export default route(withValidateUser(UserSubscribersRoute), ROUTE_NAMES.userSubscribers)
