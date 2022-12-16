import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { useUserConnectionsRoute } from './hooks/useUserConnectionsRoute'
import Username from 'src/components/Username/Username'

interface UserConnectionsRouteProps {
  className?: string
}

const UserConnectionsRoute: FC<UserConnectionsRouteProps> = ({ className }) => {
  const { user, connections } = useUserConnectionsRoute()

  return (
    <Styled.Root
      className={className}
      title={<Username>{user?.userName}</Username>}
      headerLeft={<PageHeaderButtonBack />}
      description='Connections'
    >
      <Styled.Wrapper>
        {connections?.map(subscriber => (
          <Styled.UserCard
            key={subscriber.userName}
            userName={subscriber?.userName}
            firstName={subscriber?.firstName}
            lastName={subscriber?.lastName}
            verify={subscriber?.verify}
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

export default route(UserConnectionsRoute, ROUTE_NAMES.userConnections)
