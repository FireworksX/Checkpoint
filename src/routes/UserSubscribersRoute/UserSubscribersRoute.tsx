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
  const { user, subscribers } = useUserSubscribersRoute()

  return (
    <Styled.Root className={className}>
      <Styled.Header left={<PageHeaderButtonBack />}>
        <Styled.HeaderTitle>
          <Username>{user?.username}</Username>
        </Styled.HeaderTitle>
      </Styled.Header>

      <Styled.Wrapper>
        {subscribers?.map(subscriber => (
          <Styled.UserCard
            key={subscriber._id}
            username={subscriber?.username}
            firstName={subscriber?.firstName}
            lastName={subscriber?.lastName}
            phone={subscriber?.phone}
            appLinkProps={{
              type: 'user',
              userSlug: subscriber.username!
            }}
          />
        ))}
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default route(withValidateUser(UserSubscribersRoute), ROUTE_NAMES.userSubscribers)
