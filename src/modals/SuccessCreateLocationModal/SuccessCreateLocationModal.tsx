import { FC } from 'react'
import * as Styled from './styles'
import Button from 'src/components/Button/Button'
import { MODAL_NAMES } from 'src/router/constants'
import { Category } from '../../interfaces/Category'
import { staticImagesMap } from '../../data/staticImagesMap'
import ModalCard from '../../widgets/ModalCard/ModalCard'

interface CreateCategoryModalProps {
  className?: string
}

type CategoryInner = Pick<Category, '_id' | 'name' | 'description' | 'icon' | 'slug'>

export interface ChooseCategoryModalContext {
  list: CategoryInner[]
  onSelect: (category: CategoryInner) => void
}

const SuccessCreateLocationModal: FC<CreateCategoryModalProps> = ({ className }) => {
  return (
    <ModalCard
      className={className}
      name={MODAL_NAMES.successCreateLocation}
      header='Всё получилось'
      description='Только что мы добавили ещё одно крутое место, го в том же духе'
      icon={<Styled.Icon src={staticImagesMap.star} />}
      actions={
        <Button stretched size='l'>
          Посмотреть место
        </Button>
      }
    />
  )
}

export default SuccessCreateLocationModal
