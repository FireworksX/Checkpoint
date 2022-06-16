import { FC } from 'react'
import * as Styled from './styles'
import BottomSheet from 'src/widgets/BottomSheet/BottomSheet'
import Button from 'src/components/Button/Button'
import BottomSheetHeader from 'src/widgets/BottomSheet/components/BottomSheetHeader/BottomSheetHeader'
import { useEditCategoryModal } from './hooks/useEditCategoryModal'
import { MODAL_NAMES } from 'src/router/constants'

interface CreateCategoryModalProps {
  className?: string
}

const EditCategoryModal: FC<CreateCategoryModalProps> = ({ className }) => {
  const { name, description, onSubmit } = useEditCategoryModal()

  return (
    <BottomSheet name={MODAL_NAMES.editCategory} withHeader autoClose>
      <Styled.Root className={className}>
        <BottomSheetHeader>Создать категорию</BottomSheetHeader>
        <form onSubmit={onSubmit}>
          <Styled.BaseInput placeholder='Название категории' {...name} />
          <Styled.BaseInput placeholder='Описание (пару слов)' {...description} />
          <Button stretched size='l'>
            Сохранить
          </Button>
        </form>
      </Styled.Root>
    </BottomSheet>
  )
}

export default EditCategoryModal
