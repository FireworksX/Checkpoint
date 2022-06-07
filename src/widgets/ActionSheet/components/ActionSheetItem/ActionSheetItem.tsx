import { FC } from 'react'
import * as Styled from './styles'

export interface ActionSheetItemProps {
  mode?: 'destructive'
  className?: string
}

const ActionSheetItem: FC<ActionSheetItemProps> = ({ className, children, mode }) => {
  return <Styled.Root className={className} effect='none' mode={mode}>{children}</Styled.Root>
}

export default ActionSheetItem
