import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { useProfileSubscribersRoute } from './hooks/useProfileSubscribersRoute'

interface ProfileRouteProps {
  className?: string
}

const ProfileSubscribersRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { user, subscribers } = useProfileSubscribersRoute()

  return (
    <Styled.Root className={className}>
      <Styled.Header left={<PageHeaderButtonBack />} description='Following'>
          @fireworks
      </Styled.Header>

      <Styled.Wrapper>
        {subscribers?.map(subscriber => (
          <Styled.UserCard
            key={subscriber._id}
            username={subscriber?.username}
            firstName={subscriber?.firstName}
            verify={subscriber?.verify}
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

export default route(ProfileSubscribersRoute, ROUTE_NAMES.profileSubscribers)
