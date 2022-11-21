import { FC } from 'react'
import * as Styled from './styles'
import { LinkProps } from 'src/widgets/Link/Link'
import { BaseUser } from 'src/interfaces/User'
import Username from 'src/components/Username/Username'
import { buildFullName } from 'src/utils/buildFullName'
import { useInitialAvatarPlaceholder } from 'src/widgets/Avatar/hooks/useInitialAvatarPlaceholder'
import Button from "../Button/Button";
import SubscribeButton from "../../widgets/SubscribeContainer/components/SubscribeButton/SubscribeButton";
import {FollowButton} from "./styles";

interface UserRowCardProps extends Pick<BaseUser, 'username' | 'firstName' | 'lastName' | 'mail' | 'verify'> {
  appLinkProps?: LinkProps
  className?: string
}

const UserRowCard: FC<UserRowCardProps> = ({
  className,
  username,
  firstName,
  verify,
  lastName,
  mail,
  appLinkProps
}) => {
  const avatarText = useInitialAvatarPlaceholder({ username, firstName, lastName })

  return (
    <Styled.Root className={className} {...appLinkProps}>
      <Styled.AvatarComponent uniqueId={mail}>{avatarText}</Styled.AvatarComponent>
      <div>
        <Styled.Title>
          {buildFullName(firstName, lastName)}
          {verify && <Styled.VerifyIcon />}
        </Styled.Title>
        <Styled.Description>{username}</Styled.Description>
      </div>

      <Styled.FollowButton>
        <SubscribeButton isFollowing/>
      </Styled.FollowButton>
    </Styled.Root>
  )
}

export default UserRowCard
