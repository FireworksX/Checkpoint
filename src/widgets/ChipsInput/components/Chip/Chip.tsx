import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import Icon from 'src/components/Icon/Icon'
import { TouchableProps } from 'src/components/Touchable/Touchable'

interface ChipProps extends TouchableProps {
  className?: string
  children?: ReactNode
  before?: ReactNode
  removable?: boolean
  onRemove?(): void
}

const Chip: FC<ChipProps> = ({ className, children, removable, before, onRemove, ...touchProps }) => {
  return (
    <Styled.Root className={className} {...touchProps}>
      {before && <Styled.Before>{before}</Styled.Before>}
      {children}
      {removable && (
        <Styled.Removable onClick={onRemove}>
          <Icon name='close' width={12} height={12} />
        </Styled.Removable>
      )}
    </Styled.Root>
  )
}

export default Chip
