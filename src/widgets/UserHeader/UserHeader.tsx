import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import { useInitialAvatarPlaceholder } from 'src/widgets/Avatar/hooks/useInitialAvatarPlaceholder'
import { buildFullName } from 'src/utils/buildFullName'
import CounterCell from './components/CounterCell/CounterCell'
import HashtagCell from 'src/components/HashtagCell/HashtagCell'
import HorizontalScroll from 'src/components/HorizontalScroll/HorizontalScroll'
import { LinkProps } from '../Link/Link'

export interface UserHeaderProps {
  firstName?: string
  lastName?: string
  bio?: string
  userName?: string
  verify?: boolean
  className?: string
  actions?: ReactNode
  avatar?: string
  counters?: {
    value: number
    label: string
    appLinkProps: LinkProps
  }[]
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
  counters = []
}) => {
  const avatarText = useInitialAvatarPlaceholder({ userName, firstName, lastName })

  return (
    <Styled.Root className={className}>
      <Styled.Wrapper>
        <Styled.Head>
          <Styled.AvatarComponent src={avatar} uniqueId={userName}>
            {avatarText}
          </Styled.AvatarComponent>
          <Styled.Counters>
            {counters.map(counter => (
              <CounterCell
                key={counter.label}
                appLinkProps={counter.appLinkProps}
                value={counter.value}
                description={counter.label}
              />
            ))}
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
