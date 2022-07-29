import React, { FC } from 'react'
import * as Styled from './styles'

interface SubscribeButtonProps {
  isSameUser?: boolean
  isFollowing?: boolean
  className?: string
  onClick(e: React.MouseEvent): Promise<void>
}

const SubscribeButton: FC<SubscribeButtonProps> = ({ className, children, isSameUser, isFollowing, onClick }) => {
  if (isSameUser) {
    return null
  }

  return (
    <Styled.Root mode={isFollowing ? 'secondary' : 'primary'} className={className} onClick={onClick}>
      {children ? (
        children
      ) : isFollowing ? (
        <Styled.ButtonWrapper>
          <Styled.ButtonIcon name='check' />
          Отписаться
        </Styled.ButtonWrapper>
      ) : (
        'Подписаться'
      )}
    </Styled.Root>
  )
}

export default SubscribeButton
