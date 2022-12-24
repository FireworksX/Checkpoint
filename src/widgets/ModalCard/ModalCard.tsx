import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import { BottomSheetProps } from '../BottomSheet/BottomSheet'
import Icon from 'src/components/Icon/Icon'
import { useModal } from 'src/hooks/useModal'

interface ModalCardProps extends Pick<BottomSheetProps, 'name' | 'autoClose' | 'onClose'> {
  className?: string
  icon?: ReactNode
  header?: ReactNode
  description?: ReactNode
  actions?: ReactNode
  actionsHorizontal?: boolean
}

const ModalCard: FC<ModalCardProps> = ({
  className,
  icon,
  actions,
  header,
  description,
  name,
  actionsHorizontal,
  autoClose = true,
  onClose
}) => {
  const { close } = useModal(name)

  return (
    <Styled.Root name={name} autoClose={autoClose} className={className} onClose={onClose}>
      {autoClose && (
        <Styled.CloseIcon onClick={close}>
          <Icon name='close' width={14} height={14} />
        </Styled.CloseIcon>
      )}
      <Styled.Body>
        {icon && <Styled.Icon>{icon}</Styled.Icon>}
        {header && <Styled.Header>{header}</Styled.Header>}
        {description && <Styled.Description>{description}</Styled.Description>}
        {actions && <Styled.Actions actionsHorizontal={actionsHorizontal}>{actions}</Styled.Actions>}
      </Styled.Body>
    </Styled.Root>
  )
}

export default ModalCard
