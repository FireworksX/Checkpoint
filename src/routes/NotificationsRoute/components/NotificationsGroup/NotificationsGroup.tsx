import { FC, ReactNode } from 'react'
import * as Styled from './styles'

interface NotificationsGroupProps {
  title?: string
  counter?: ReactNode
  className?: string
}

const NotificationsGroup: FC<NotificationsGroupProps> = ({ className, title, children, counter }) => {
  return (
    <Styled.Root className={className}>
      {(title || counter) && (
        <Styled.Title>
          {title}
          <Styled.Counter>{counter}</Styled.Counter>
        </Styled.Title>
      )}
      {children}
    </Styled.Root>
  )
}

export default NotificationsGroup
