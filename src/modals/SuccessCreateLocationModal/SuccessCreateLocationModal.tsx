import { FC } from 'react'
import * as Styled from './styles'
import Button from 'src/components/Button/Button'
import { MODAL_NAMES } from 'src/router/constants'
import { staticImagesMap } from '../../data/staticImagesMap'
import ModalCard from '../../widgets/ModalCard/ModalCard'
import { useModal } from '../../hooks/useModal'
import Link from '../../widgets/Link/Link'

interface CreateCategoryModalProps {
  className?: string
}

export interface SuccessCreateModalContext {
  locationSlug: string
}

const SuccessCreateLocationModal: FC<CreateCategoryModalProps> = ({ className }) => {
  const { context, close } = useModal<SuccessCreateModalContext>(MODAL_NAMES.successCreateLocation)

  return (
    <ModalCard
      className={className}
      name={MODAL_NAMES.successCreateLocation}
      header='Всё получилось'
      description='Только что мы добавили ещё одно крутое место, го в том же духе'
      icon={<Styled.Icon src={staticImagesMap.star} />}
      actions={
        <Link
          type='locationView'
          locationSlug={context?.locationSlug}
          waitNavigate={async navigate => {
            await close()
            navigate()
          }}
        >
          <Button stretched size='l'>
            Посмотреть место
          </Button>
        </Link>
      }
    />
  )
}

export default SuccessCreateLocationModal
