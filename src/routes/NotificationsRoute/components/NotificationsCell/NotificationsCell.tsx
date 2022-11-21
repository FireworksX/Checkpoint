import { FC } from 'react'
import * as Styled from './styles'

interface NotificationsCellProps {
  avatar: string
  name: string
  description: string
  time?: string
  className?: string
}

const NotificationsCell: FC<NotificationsCellProps> = ({ className, avatar, name, description, time }) => {
  return (
    <Styled.Root className={className}>
      <Styled.UserAvatar src={avatar} size={44} />
      <div>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Description>
          {description}
          {time && <Styled.Time>{time}</Styled.Time>}
        </Styled.Description>
      </div>
    </Styled.Root>
  )
}

export default NotificationsCell
