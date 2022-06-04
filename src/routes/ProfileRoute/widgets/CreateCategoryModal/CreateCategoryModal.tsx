import { FC } from 'react'
import * as Styled from './styles'
import BottomSheet, { BottomSheetProps } from 'src/widgets/BottomSheet/BottomSheet'
import Button from 'src/components/Button/Button'
import BottomSheetHeader from 'src/widgets/BottomSheet/components/BottomSheetHeader/BottomSheetHeader'
import { useCreateCategory } from './hooks/useCreateCategory'

interface CreateCategoryModalProps {
  isOpen: BottomSheetProps['isOpen']
  className?: string
  onClose?: BottomSheetProps['onClose']
}

const CreateCategoryModal: FC<CreateCategoryModalProps> = ({ className, isOpen, onClose }) => {
  const { name, description, onSubmit } = useCreateCategory(onClose)

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
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

export default CreateCategoryModal
