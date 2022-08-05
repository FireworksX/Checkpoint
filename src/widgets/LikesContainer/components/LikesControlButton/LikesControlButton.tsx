import { FC } from 'react'
import * as Styled from './styles'
import { LikesContainerRenderProps } from 'src/widgets/LikesContainer/LikesContainer'
import { ButtonProps } from 'src/components/Button/Button'

interface LikesControlButtonProps extends LikesContainerRenderProps, Omit<ButtonProps, 'onClick'> {
  count?: number
  className?: string
}

const LikesControlButton: FC<LikesControlButtonProps> = ({ className, hasLike, count, onClick, ...buttonProps }) => {
  const iconName: SvgNames = hasLike ? 'heart-fill' : 'heart'

  return (
    <Styled.Root className={className} onClick={onClick} {...buttonProps}>
      <Styled.Icon name={iconName} hasLike={hasLike} width={24} height={24} /> {count}
    </Styled.Root>
  )
}

export default LikesControlButton
