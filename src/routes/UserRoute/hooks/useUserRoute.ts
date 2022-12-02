import { useMemo, useState } from 'react'
import { staticImagesMapKebab } from 'src/data/staticImagesMap'
import { Category } from 'src/interfaces/Category'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { useRouter } from 'src/hooks/useRouter'
import { ROUTE_PARAMS } from 'src/router/constants'
import { AuthUserResponse } from 'src/interfaces/User'
import { buildFullName } from 'src/utils/buildFullName'

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

}
