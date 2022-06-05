import { FC, useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { BottomSheet as BottomSheetComp, BottomSheetRef } from 'react-spring-bottom-sheet'
import * as Styled from './styles'
import 'react-spring-bottom-sheet/dist/style.css'
import { useModal } from 'src/hooks/useModal'
import { ModalName } from 'src/router/constants'

export interface BottomSheetProps {
  name: ModalName
  autoClose?: boolean
  className?: string
  onClose?: (close: () => void) => any
}

const BottomSheet: FC<BottomSheetProps> = ({ className, children, autoClose, name, onClose }) => {
  const { isOpen, close } = useModal(name)

  const onCloseModal = useCallback(() => {
    if (onClose) {
      onClose(close)
    }

    if (autoClose) {
      close()
    }
  }, [onClose, close, autoClose])

  return (
    <BottomSheetComp open={isOpen} onDismiss={onCloseModal}>
      <Styled.Root className={className}>{children}</Styled.Root>
    </BottomSheetComp>
  )
}

export default BottomSheet
