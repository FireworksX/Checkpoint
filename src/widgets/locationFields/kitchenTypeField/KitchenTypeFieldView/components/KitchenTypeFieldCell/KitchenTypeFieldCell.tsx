import { FC } from 'react'
import * as Styled from './styles'
import Icon from 'src/components/Icon/Icon'

interface KitchenTypeFieldCellProps {
  className?: string
  onRemove?: () => void
}

const KitchenTypeFieldCell: FC<KitchenTypeFieldCellProps> = ({ className, children, onRemove }) => {
  return (
    <Styled.Root className={className} hasRemove={!!onRemove}>
      {children}
      {onRemove && (
        <Styled.Remove onClick={onRemove}>
          <Icon name='close' width={10} />
        </Styled.Remove>
      )}
    </Styled.Root>
  )
}

export default KitchenTypeFieldCell
