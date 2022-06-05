import { useCallback, useMemo, useState } from 'react'
import { useToggle } from 'react-use'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { staticImagesMapKebab } from 'src/data/staticImagesMap'
import { useUserLocations } from 'src/hooks/data/useUserLocations'
import { Category } from 'src/interfaces/Category'

const DEFAULT_ALL_CATEGORY: Category = {
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
  const [isOpenCreate, toggleIsOpenCreate] = useToggle(false)
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_ALL_CATEGORY.slug)

  const { user, fullName } = useCurrentUser()
  const { data: locations, fetching: locationsFetching } = useUserLocations({
    author: user?._id,
    category: user?.categories?.find(category => category.slug === selectedCategory)?._id
  })

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
        toggleIsOpenCreate()
        return
      }

      setSelectedCategory(slug)
    },
    [setSelectedCategory, toggleIsOpenCreate]
  )

  return {
    locations,
    locationsFetching,
    user,
    categories,
    fullName,
    followers: user?.followers || [],
    subscribers: user?.subscribers || [],
    counters: {
      locations: user?.counters?.locations || 0,
      followers: user?.counters?.followers || 0,
      subscribers: user?.counters?.subscribers || 0
    },
    onSelectCategory,
    isOpenCreate,
    toggleIsOpenCreate
  }
}
