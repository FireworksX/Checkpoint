import { useMemo, useState } from 'react'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { staticImagesMapKebab } from 'src/data/staticImagesMap'
import { useUserLocations } from 'src/hooks/data/useUserLocations'
import { Category } from 'src/interfaces/Category'

const DEFAULT_ALL_CATEGORY: Category = {
  name: 'Все локации',
  description: 'Всё что есть',
  icon: 'sunset',
  slug: 'all',
  author: '',
  createdAt: Date.now().toString()
}

export const useProfileRoute = () => {
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_ALL_CATEGORY.slug)

  const { user, fullName } = useCurrentUser()

  const { data: locations } = useUserLocations({
    author: user?._id
  })

  const categories = useMemo(
    () =>
      ([DEFAULT_ALL_CATEGORY, ...(user?.categories || [])] || []).map(category => ({
        ...category,
        icon: category.icon ? staticImagesMapKebab[category.icon] : undefined,
        isActive: selectedCategory === category.slug
      })),
    [selectedCategory]
  )

  return {
    locations,
    user,
    categories,
    fullName,
    setSelectedCategory
  }
}
