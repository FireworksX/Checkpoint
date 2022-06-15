import { FC } from 'react'
import * as Styled from './styles'
import { ModalName } from 'src/router/constants'
import { BottomSheetProps } from 'src/widgets/BottomSheet/BottomSheet'
import { useModal } from 'src/hooks/useModal'

interface ActionSheetProps {
  name: ModalName
  className?: string
}

const ActionSheet: FC<ActionSheetProps> = ({ className, name, children }) => {
  const { close } = useModal(name)

  return (
    <Styled.Root name={name} className={className} withHeader={false} withBackground={false} autoClose>
      <Styled.Body>{children}</Styled.Body>
      <Styled.CancelButton onClick={close}>Отменить</Styled.CancelButton>
    </Styled.Root>
  )
}

export default ActionSheet
