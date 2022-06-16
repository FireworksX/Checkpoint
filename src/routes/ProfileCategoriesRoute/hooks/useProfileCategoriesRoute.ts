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
  const { user, revalidate } = useCurrentUser()
  const { execute: executeRemoveCategory } = useMutation<boolean, { findSlug: string }>(apiEndpoints.CATEGORIES_REMOVE)

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

  const removeCategory = useCallback(
    async (category: Category) => {
      const result = await executeRemoveCategory({
        findSlug: category.slug
      })

      await revalidate()
    },
    [executeRemoveCategory, revalidate]
  )

  return {
    list: categories,
    editCategory,
    removeCategory,
    createCategory: openCreateCategory
  }
}
