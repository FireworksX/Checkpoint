import { useMemo, useState } from 'react'
import { staticImagesMapKebab } from 'src/data/staticImagesMap'
import { useUserLocations } from 'src/hooks/data/useUserLocations'
import { Category } from 'src/interfaces/Category'
import { useRequest } from 'src/hooks/useRequest'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { useRouter } from 'src/hooks/useRouter'
import { ROUTE_PARAMS } from 'src/router/constants'
import { AuthUserResponse } from 'src/interfaces/User'
import { buildFullName } from 'src/utils/buildFullName'
import {useFollowingUser} from "../../../hooks/data/useFollowingUser";

const DEFAULT_ALL_CATEGORY: Category = {
  _id: '',
  name: 'Все локации',
  description: 'Всё что есть',
  icon: 'sunset',
  slug: 'all',
  author: '',
  createdAt: Date.now().toString()
}

export const useUserRoute = () => {
  const { getParam } = useRouter()
  const userSlug = getParam(ROUTE_PARAMS.userSlug)
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_ALL_CATEGORY.slug)

  const { data: userResponse } = useRequest<AuthUserResponse>(`${apiEndpoints.USERS_DETAIL}/${userSlug}`)
  const user = userResponse?.data

  const { data: locations, fetching: locationsFetching } = useUserLocations({
    author: user?._id,
    category: user?.categories?.find(category => category.slug === selectedCategory)?._id
  })

  const following = useFollowingUser(user?._id || '')

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
    userSlug,
    locations,
    locationsFetching,
    user,
    categories,
    fullName: buildFullName(user?.firstName, user?.lastName),
    followers: user?.followers || [],
    subscribers: user?.subscribers || [],
    following,
    counters: {
      locations: user?.counters?.locations || 0,
      followers: user?.counters?.followers || 0,
      subscribers: user?.counters?.subscribers || 0
    },
    setSelectedCategory
  }
}
