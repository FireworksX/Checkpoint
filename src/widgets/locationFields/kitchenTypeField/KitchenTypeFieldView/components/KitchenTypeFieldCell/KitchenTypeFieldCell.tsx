import { FC } from 'react'
import * as Styled from './styles'

interface KitchenTypeFieldCellProps {
  className?: string
}

const KitchenTypeFieldCell: FC<KitchenTypeFieldCellProps> = ({ className, children }) => {
  return <Styled.Root className={className}>{children}</Styled.Root>
}

export default KitchenTypeFieldCell
