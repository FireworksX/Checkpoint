import { FC, ReactNode } from 'react'
import * as Styled from './styles'

interface NotificationsCellProps {
  avatar: string
  name: string
  description: string
  time?: string
  asideCover?: string
  className?: string
}

const NotificationsCell: FC<NotificationsCellProps> = ({ className, avatar, name, description, time, asideCover }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Avatar src={avatar} alt={name} size={44} />
      <div>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Description>
          {description}
          {time && <Styled.Time>{time}</Styled.Time>}
        </Styled.Description>
      </div>
      {asideCover && <Styled.Aside src={asideCover} />}
    </Styled.Root>
  )
}

export default NotificationsCell
