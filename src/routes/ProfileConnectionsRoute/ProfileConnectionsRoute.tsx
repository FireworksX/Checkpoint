import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import {useProfileConnectionsRoute} from './hooks/useProfileSubscribersRoute'
import Username from '../../components/Username/Username'

interface  ProfileConnectionsRouteProps {
  className?: string
}

const ProfileConnectionsRoute: FC<ProfileConnectionsRouteProps> = ({ className }) => {
  const { user, list, fetching } = useProfileConnectionsRoute()

  return (
    <Styled.Root
      className={className}
      fetching={fetching}
      title={<Username>{user?.userName}</Username>}
      headerLeft={<PageHeaderButtonBack />}
      description='Connections'
    >
      <Styled.Wrapper>
        {list?.map(subscriber => (
          <Styled.UserCard
            key={subscriber._id}
            userName={subscriber?.userName}
            firstName={subscriber?.firstName}
            verify={subscriber?.verify}
            lastName={subscriber?.lastName}
            phone={subscriber?.phone}
            appLinkProps={{
              type: 'user',
              userSlug: subscriber.userName!
            }}
          />
        ))}
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default route(ProfileConnectionsRoute, ROUTE_NAMES.profileConnections)
