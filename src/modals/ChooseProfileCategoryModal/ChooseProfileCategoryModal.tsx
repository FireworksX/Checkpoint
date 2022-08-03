import { FC, useCallback } from 'react'
import * as Styled from './styles'
import BottomSheet from 'src/widgets/BottomSheet/BottomSheet'
import Button from 'src/components/Button/Button'
import BottomSheetHeader from 'src/widgets/BottomSheet/components/BottomSheetHeader/BottomSheetHeader'
import { MODAL_NAMES } from 'src/router/constants'
import CompilationCell, { CompilationCellProps } from '../../components/CompilationCell/CompilationCell'
import { useModal } from '../../hooks/useModal'
import Container from '../../components/Container/Container'
import { Category } from '../../interfaces/Category'
import { staticImagesMapKebab } from '../../data/staticImagesMap'
import { iconToImage } from '../../utils/iconToImage'
import Placeholder from '../../components/Placeholder/Placeholder'
import { CreateCategoryModalContext } from '../CreateCategoryModal/CreateCategoryModal'
import { useChooseProfileCategoryModal } from './hooks/useChooseProfileCategoryModal'

interface ChooseProfileCategoryModalProps {
  className?: string
}

export type CategoryInner = Pick<Category, '_id' | 'name' | 'description' | 'icon' | 'slug'>

export interface ChooseProfileCategoryModalContext {
  onSelect: (category: CategoryInner) => void
}

const ChooseProfileCategoryModal: FC<ChooseProfileCategoryModalProps> = ({ className }) => {
  const { categories, createCategory, onSelect } = useChooseProfileCategoryModal()

  return (
    <BottomSheet name={MODAL_NAMES.chooseProfileCategory} withHeader autoClose>
      <Styled.Root className={className}>
        <BottomSheetHeader>Категории</BottomSheetHeader>
        <Container>
          {categories.length === 0 && (
            <Placeholder actions={<Button onClick={createCategory}>Создать категорию</Button>}>
              У вас пока нет ни одной категории, вы можете добавить парочку прямо сейчас.
            </Placeholder>
          )}
          {categories.map(category => (
            <Styled.Category
              key={category._id}
              title={category.name}
              description={category.description}
              image={iconToImage(category.icon)}
              onClick={() => onSelect(category)}
            />
          ))}
          {categories.length > 0 && (
            <Button size='l' stretched onClick={createCategory}>
              Создать категорю
            </Button>
          )}
        </Container>
      </Styled.Root>
    </BottomSheet>
  )
}

export default ChooseProfileCategoryModal
