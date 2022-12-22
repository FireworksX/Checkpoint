import { FC } from 'react'
import * as Styled from './styles'
import { buildFullName } from '../../utils/buildFullName'
import { LinkProps } from '../../widgets/Link/Link'
import { useInitialAvatarPlaceholder } from '../../widgets/Avatar/hooks/useInitialAvatarPlaceholder'
import ButtonStates from '../ButtonStates/ButtonStates'
import {useToggle} from "react-use";

interface UserVerticalCardProps {
  userName: string
  firstName?: string
  lastName?: string
  verify?: boolean
  isFollow?: boolean
  appLinkProps?: LinkProps
  className?: string
}

const UserVerticalCard: FC<UserVerticalCardProps> = ({
  className,
  userName,
  firstName,
  lastName,
  appLinkProps,
  isFollow,
  verify
}) => {
  const [_isFollow, toggleIsFollow] = useToggle(isFollow)
  const avatarText = useInitialAvatarPlaceholder({ userName, firstName, lastName })

  return (
    <Styled.Root className={className}>
      {verify && <Styled.VerifyIcon />}
      <Styled.Logo uniqueId={userName}>{avatarText}</Styled.Logo>
      <Styled.Title>{buildFullName(firstName, lastName)}</Styled.Title>
      <Styled.Description>{userName}</Styled.Description>

      <Styled.FollowButton>
        <ButtonStates
          size='m'
          states={[{ children: 'Follow' }, { children: 'Following' }]}
          stateIndex={_isFollow ? 1 : 0}
          onClick={toggleIsFollow}
        />
      </Styled.FollowButton>
    </Styled.Root>
  )
}

export default UserVerticalCard
