import { FC } from 'react'
import * as Styled from './styles'

interface SubscribeButtonProps {
  isFollowing?: boolean
  className?: string
  onClick(): Promise<void>
}

const SubscribeButton: FC<SubscribeButtonProps> = ({ className, children, isFollowing, onClick }) => {
  return (
    <Styled.Root mode={isFollowing ? 'secondary' : 'primary'} className={className} onClick={onClick}>
      {children ? children : isFollowing ? 'Отписаться' : 'Подписаться'}
    </Styled.Root>
  )
}

export default SubscribeButton
