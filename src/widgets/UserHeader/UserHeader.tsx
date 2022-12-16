import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import { BaseUser } from 'src/interfaces/User'
import { useInitialAvatarPlaceholder } from 'src/widgets/Avatar/hooks/useInitialAvatarPlaceholder'
import { buildFullName } from 'src/utils/buildFullName'
import { Actions, Counters } from './styles'
import CounterCell from './components/CounterCell/CounterCell'
import HashtagCell from '../../components/HashtagCell/HashtagCell'
import HorizontalScroll from '../../components/HorizontalScroll/HorizontalScroll'
import { useRouter } from '../../hooks/useRouter'
import { ROUTE_PARAMS } from '../../router/constants'

interface UserHeaderProps extends Pick<BaseUser, 'firstName' | 'lastName' | 'mail' | 'bio' | 'userName' | 'verify'> {
  className?: string
  actions?: ReactNode
  avatar?: string
}

const UserHeader: FC<UserHeaderProps> = ({
  className,
  bio,
  avatar,
  actions,
  firstName,
  lastName,
  verify,
  userName,
  mail
}) => {
  const { getParam } = useRouter()
  const avatarText = useInitialAvatarPlaceholder({ userName, firstName, lastName })
  const userSlug = getParam(ROUTE_PARAMS.userSlug)

  return (
    <Styled.Root className={className}>
      <Styled.Wrapper>
        <Styled.Head>
          <Styled.AvatarComponent src={avatar} uniqueId={userName}>
            {avatarText}
          </Styled.AvatarComponent>
          <Styled.Counters>
            <CounterCell
              appLinkProps={
                userSlug
                  ? {
                      type: 'userConnections',
                      userSlug
                    }
                  : { type: 'profileFollowers' }
              }
              value='1.214'
              description='Connections'
            />
            <CounterCell
              appLinkProps={
                userSlug
                  ? {
                      type: 'userFollowers',
                      userSlug
                    }
                  : { type: 'profileFollowers' }
              }
              value='852'
              description='Followers'
            />
            <CounterCell
              appLinkProps={
                userSlug
                  ? {
                      type: 'userSubscribers',
                      userSlug
                    }
                  : {
                      type: 'profileFollowers'
                    }
              }
              value='137'
              description='Following'
            />
            {actions && <Styled.Actions>{actions}</Styled.Actions>}
          </Styled.Counters>
        </Styled.Head>
        <Styled.Name>
          {buildFullName(firstName, lastName)}
          {verify && <Styled.VerifyIcon />}
        </Styled.Name>
        <Styled.Description>{bio}</Styled.Description>
      </Styled.Wrapper>

      <HorizontalScroll>
        <HashtagCell>breakfast</HashtagCell>
        <HashtagCell isActive>breakfast</HashtagCell>
        <HashtagCell isActive>breakfast</HashtagCell>
        <HashtagCell>breakfast</HashtagCell>
        <HashtagCell>breakfast</HashtagCell>
        <HashtagCell>breakfast</HashtagCell>
        <HashtagCell>breakfast</HashtagCell>
      </HorizontalScroll>
    </Styled.Root>
  )
}

export default UserHeader
