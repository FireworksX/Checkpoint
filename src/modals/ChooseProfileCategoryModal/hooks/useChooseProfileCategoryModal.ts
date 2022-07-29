import { useCallback } from 'react'
import { useModal } from '../../../hooks/useModal'
import { MODAL_NAMES } from '../../../router/constants'
import { CreateCategoryModalContext } from '../../CreateCategoryModal/CreateCategoryModal'
import { useCurrentUser } from '../../../hooks/data/useCurrentUser'
import { ChooseProfileCategoryModalContext } from '../ChooseProfileCategoryModal'
import { noop } from 'src/utils/helpers'

export const useChooseProfileCategoryModal = () => {
  const { categories, revalidate } = useCurrentUser()
  const { context, open: openChooseCategory } = useModal<ChooseProfileCategoryModalContext>(
    MODAL_NAMES.chooseProfileCategory
  )
  const { open: openCreateCategory } = useModal<CreateCategoryModalContext>(MODAL_NAMES.createCategory)

  const createCategory = useCallback(() => {
    openCreateCategory({
      onCreate: async () => {
        revalidate()
        openChooseCategory(context)
      },
      onClose: () => openChooseCategory(context)
    })
  }, [openChooseCategory, openCreateCategory, context, revalidate])

  return {
    categories,
    createCategory,
    onSelect: context?.onSelect || noop
  }
}
