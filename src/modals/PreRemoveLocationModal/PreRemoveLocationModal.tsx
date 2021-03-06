import { FC } from 'react'
import * as Styled from './styles'
import Button from 'src/components/Button/Button'
import { MODAL_NAMES } from 'src/router/constants'
import ModalCard from 'src/widgets/ModalCard/ModalCard'
import { useModal } from 'src/hooks/useModal'

interface PreRemoveLocationProps {
  className?: string
}

export interface PreRemoveLocationModalContext {
  onRemove(): void
}

const PreRemoveLocationModal: FC<PreRemoveLocationProps> = ({ className }) => {
  const { context } = useModal<PreRemoveLocationModalContext>(MODAL_NAMES.preRemoveLocation)

  return (
    <ModalCard
      className={className}
      name={MODAL_NAMES.preRemoveLocation}
      header='Вы уверены?'
      description='Это действие отменить нельзя. Локация будет безвозвратно удалена.'
      icon={<Styled.Icon name='trash' />}
      actions={
        <Button stretched size='l' color='negative' onClick={context?.onRemove}>
          Удалить
        </Button>
      }
    />
  )
}

export default PreRemoveLocationModal
