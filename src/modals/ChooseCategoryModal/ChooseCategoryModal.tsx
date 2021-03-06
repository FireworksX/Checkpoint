import { FC } from 'react'
import * as Styled from './styles'
import BottomSheet from 'src/widgets/BottomSheet/BottomSheet'
import BottomSheetHeader from 'src/widgets/BottomSheet/components/BottomSheetHeader/BottomSheetHeader'
import { MODAL_NAMES } from 'src/router/constants'
import { useModal } from '../../hooks/useModal'
import Container from '../../components/Container/Container'
import { Category } from '../../interfaces/Category'
import { iconToImage } from '../../utils/iconToImage'

interface ChooseCategoryModalProps {
  className?: string
}

export type CategoryInner = Pick<Category, '_id' | 'name' | 'description' | 'icon' | 'slug'>

export interface ChooseCategoryModalContext {
  list: CategoryInner[]
  onSelect: (category: CategoryInner) => void
}

const ChooseCategoryModal: FC<ChooseCategoryModalProps> = ({ className }) => {
  const { context } = useModal<ChooseCategoryModalContext>(MODAL_NAMES.chooseCategory)

  const list = context?.list || []


  return (
    <BottomSheet name={MODAL_NAMES.chooseCategory} withHeader autoClose>
      <Styled.Root className={className}>
        <BottomSheetHeader>Категории</BottomSheetHeader>
        <Container>
          {list.map(category => (
            <Styled.Category
              key={category._id}
              title={category.name}
              description={category.description}
              image={iconToImage(category.icon)}
              onClick={() => context?.onSelect(category)}
            />
          ))}
        </Container>
      </Styled.Root>
    </BottomSheet>
  )
}

export default ChooseCategoryModal
