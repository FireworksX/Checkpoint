import { useCallback, useMemo } from 'react'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { staticImagesMapKebab } from 'src/data/staticImagesMap'
import { Category } from 'src/interfaces/Category'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'
import { useMutation } from 'src/hooks/useMutation'
import { apiEndpoints } from 'src/data/apiEndpoints'

export const useProfileCategoriesRoute = () => {
  const { open: openEditCategory } = useModal<Category>(MODAL_NAMES.editCategory)
  const { open: openCreateCategory } = useModal(MODAL_NAMES.createCategory)
  const { user, categories, removeCategory: userRemoveCategory } = useCurrentUser()
  const { execute: executeRemoveCategory } = useMutation<boolean, { findSlug: string }>(apiEndpoints.CATEGORIES_REMOVE)

  const parsedCategories = categories.map(category => ({
    ...category,
    icon: staticImagesMapKebab[category?.icon || '']
  }))

  const editCategory = useCallback(
    (category: Category) => {
      openEditCategory(category)
    },
    [openEditCategory]
  )

  const removeCategory = useCallback(
    async (category: Category) => {
      userRemoveCategory(category._id)

      await executeRemoveCategory({
        findSlug: category.slug
      })
    },
    [executeRemoveCategory, userRemoveCategory]
  )

  return {
    list: parsedCategories,
    editCategory,
    removeCategory,
    createCategory: openCreateCategory
  }
}
