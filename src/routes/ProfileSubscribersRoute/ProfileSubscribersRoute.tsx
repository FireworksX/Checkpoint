import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { withValidateUser } from 'src/hoc/withValidateUser'
import { useProfileSubscribersRoute } from './hooks/useProfileSubscribersRoute'

interface ProfileRouteProps {
  className?: string
}

const ProfileSubscribersRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { user, subscribers } = useProfileSubscribersRoute()

  return (
    <Styled.Root className={className}>
      <Styled.Header left={<PageHeaderButtonBack />}>
        <Styled.HeaderTitle>@{user?.username}</Styled.HeaderTitle>
      </Styled.Header>

      <Styled.Wrapper>
        {subscribers?.map(subscriber => (
          <Styled.UserCard
            key={subscriber.id}
            avatar='https://avatars.githubusercontent.com/u/22668125?v=4'
            title={subscriber.username}
            description={[subscriber?.firstName, subscriber?.lastName].join(' ')}
          />
        ))}
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default route(withValidateUser(ProfileSubscribersRoute), ROUTE_NAMES.profileSubscribers)
