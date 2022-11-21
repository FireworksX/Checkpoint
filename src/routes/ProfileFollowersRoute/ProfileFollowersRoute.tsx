import { FC } from 'react'
import * as Styled from './styles'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import PageHeaderButtonBack from 'src/widgets/PageHeader/components/PageHeaderButtonBack/PageHeaderButtonBack'
import { useProfileFollowersRoute } from './hooks/useProfileFollowersRoute'

interface ProfileRouteProps {
  className?: string
}

const ProfileFollowersRoute: FC<ProfileRouteProps> = ({ className }) => {
  const { user, followers } = useProfileFollowersRoute()

  return (
    <Styled.Root className={className}>
      <Styled.Header left={<PageHeaderButtonBack />} description='Followers'>
          @fireworks
      </Styled.Header>

      <Styled.Wrapper>
          <Styled.UserCard
              username={'amandasmith'}
              firstName='Amanda'
              lastName='Smith'
              appLinkProps={{
                  type: 'user',
                  userSlug: ''
              }}
          />
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default route(ProfileFollowersRoute, ROUTE_NAMES.profileFollowers)
