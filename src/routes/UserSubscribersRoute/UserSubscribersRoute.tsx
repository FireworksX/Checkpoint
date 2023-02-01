import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { useUserSubscribersRoute } from './hooks/useUserSubscribersRoute'
import Username from 'src/components/Username/Username'

interface ProfileRouteProps {
  className?: string
}

const UserSubscribersRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { user, list, fetching } = useUserSubscribersRoute()

  return (
    <Styled.Root
      className={className}
      title={<Username>{user?.userName}</Username>}
      headerLeft={<PageHeaderButtonBack />}
      fetching={fetching}
      description='Following'
    >
      <Styled.Wrapper>
        {list?.map(subscriber => (
          <Styled.UserCard
            key={subscriber.userName}
            userName={subscriber?.userName}
            firstName={subscriber?.firstName}
            lastName={subscriber?.lastName}
            // verify={subscriber?.verify}
            appLinkProps={{
              type: 'user',
              userSlug: subscriber.userName
            }}
          />
        ))}
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default route(UserSubscribersRoute, ROUTE_NAMES.userSubscribers)
