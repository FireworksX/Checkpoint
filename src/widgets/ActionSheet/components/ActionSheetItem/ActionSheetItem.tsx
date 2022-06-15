import { FC } from 'react'
import * as Styled from './styles'
import { TouchableProps } from 'src/components/Touchable/Touchable'

export interface ActionSheetItemProps extends TouchableProps {
  mode?: 'destructive'
  className?: string
}

const ActionSheetItem: FC<ActionSheetItemProps> = ({ className, children, mode, ...rest }) => {
  return (
    <Styled.Root className={className} effect='none' mode={mode} {...rest}>
      {children}
    </Styled.Root>
  )
}

export default ActionSheetItem
