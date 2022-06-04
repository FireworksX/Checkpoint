import { FC } from 'react'
import { BottomSheet as BottomSheetComp, BottomSheetRef } from 'react-spring-bottom-sheet'
import * as Styled from './styles'
import 'react-spring-bottom-sheet/dist/style.css'

export interface BottomSheetProps {
  isOpen: boolean
  className?: string
  onClose?: () => any
}

const BottomSheet: FC<BottomSheetProps> = ({ className, children, isOpen, onClose }) => {
  return (
    <BottomSheetComp open={isOpen} onDismiss={onClose}>
      <Styled.Root className={className}>{children}</Styled.Root>
    </BottomSheetComp>
  )
}

export default BottomSheet
