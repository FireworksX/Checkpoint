import { FC, useCallback } from 'react'
import { BottomSheet as BottomSheetComp } from 'react-spring-bottom-sheet'
import * as Styled from './styles'
import 'react-spring-bottom-sheet/dist/style.css'
import { useModal } from 'src/hooks/useModal'
import { ModalName } from 'src/router/constants'

export interface BottomSheetProps {
  name: ModalName
  withHeader?: boolean
  withBackground?: boolean
  autoClose?: boolean
  className?: string
  onClose?: (close: () => void) => any
}

const BottomSheet: FC<BottomSheetProps> = ({
  className,
  children,
  withHeader = true,
  withBackground = true,
  autoClose,
  name,
  onClose
}) => {
  const { currentModal, close } = useModal()

  const onCloseModal = useCallback(() => {
    if (onClose) {
      onClose(close)
    }

    if (autoClose) {
      close()
    }
  }, [onClose, close, autoClose])

  return (
    <BottomSheetComp open={currentModal === name} onDismiss={onCloseModal}>
      <Styled.Global withHeader={withHeader} withBackground={withBackground} />
      <Styled.Root className={className}>{children}</Styled.Root>
    </BottomSheetComp>
  )
}

export default BottomSheet
