import React, { FC } from 'react'
import * as Styled from './styles'
import { ButtonProps } from 'src/components/Button/Button'

interface SubscribeButtonProps extends ButtonProps {
  isSameUser?: boolean
  isFollowing?: boolean
  className?: string
  labels?: [string, string]
  onClick(e: React.MouseEvent): Promise<void>
}

const SubscribeButton: FC<SubscribeButtonProps> = ({
  className,
  children,
  labels = ['Following', 'Follow'],
  isSameUser,
  isFollowing,
  onClick,
  ...rest
}) => {
  if (isSameUser) {
    return null
  }

  return (
    <Styled.Root mode={isFollowing ? 'secondary' : 'primary'} className={className} onClick={onClick} {...rest}>
      {children ? children : isFollowing ? labels[0] : labels[1]}
    </Styled.Root>
  )
}

export default SubscribeButton
