import { useCallback, useMemo, useState } from 'react'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { staticImagesMapKebab } from 'src/data/staticImagesMap'
import { useUserLocations } from 'src/hooks/data/useUserLocations'
import { Category } from 'src/interfaces/Category'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from '../../../router/constants'

export const DEFAULT_ALL_CATEGORY: Category = {
  _id: '',
  name: 'Все локации',
  description: 'Всё что есть',
  icon: 'sunset',
  slug: 'all',
  author: '',
  createdAt: Date.now().toString()
}

const CREATE_CATEGORY: Category = {
  _id: '',
  name: 'Создать',
  description: 'Что-то новенькое',
  icon: 'plus',
  slug: 'create',
  author: '',
  createdAt: Date.now().toString()
}

const FAVORITE_CATEGORY: Category = {
  _id: '',
  name: 'Любимое',
  description: 'Что вы любите',
  icon: 'red-heart',
  slug: 'likes',
  author: '',
  createdAt: Date.now().toString()
}

export const useProfileRoute = () => {
  const { open } = useModal(MODAL_NAMES.createCategory)
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_ALL_CATEGORY.slug)
  const { user, fullName } = useCurrentUser()

  const locationsFilter = useMemo(
    () =>
      selectedCategory === FAVORITE_CATEGORY.slug
        ? { onlyLikes: true }
        : {
            author: user?._id,
            category: user?.categories?.find(category => category.slug === selectedCategory)?._id
          },
    [selectedCategory, user]
  )

  const { data: locations, fetching: locationsFetching } = useUserLocations(locationsFilter)

  const categories = useMemo(
    () =>
      ([DEFAULT_ALL_CATEGORY, FAVORITE_CATEGORY, ...(user?.categories || []), CREATE_CATEGORY] || []).map(category => ({
        ...category,
        icon: category.icon ? staticImagesMapKebab[category.icon] : undefined,
        isActive: selectedCategory === category.slug
      })),
    [selectedCategory, user]
  )

  const onSelectCategory = useCallback(
    (slug: string) => {
      if (slug === CREATE_CATEGORY.slug) {
        open()
        return
      }

      setSelectedCategory(slug)
    },
    [setSelectedCategory, open]
  )

  return {
    locations,
    locationsFetching,
    user,
    selectedCategory,
    categories,
    fullName,
    followers: (user?.followers || []).filter(Boolean),
    subscribers: user?.subscribers || [],
    counters: {
      locations: user?.counters?.locations || 0,
      followers: user?.counters?.followers || 0,
      subscribers: user?.counters?.subscribers || 0
    },
    onSelectCategory
  }
}
