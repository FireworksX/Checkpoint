import { useCallback, useMemo } from 'react'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { staticImagesMapKebab } from 'src/data/staticImagesMap'
import { Category } from 'src/interfaces/Category'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'

export const useProfileCategoriesRoute = () => {
  const { open: openEditCategory } = useModal<Category>(MODAL_NAMES.editCategory)
  const { open: openCreateCategory } = useModal(MODAL_NAMES.createCategory)
  const { user } = useCurrentUser()

  const categories = useMemo(
    () => (user?.categories || []).map(category => ({ ...category, icon: staticImagesMapKebab[category?.icon || ''] })),
    [user]
  )

  const editCategory = useCallback(
    (category: Category) => {
      openEditCategory(category)
    },
    [openEditCategory]
  )

  return {
    list: categories,
    editCategory,
    createCategory: openCreateCategory
  }
}
