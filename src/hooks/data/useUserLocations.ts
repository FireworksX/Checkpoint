import { useRequest } from 'src/hooks/useRequest'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { Category } from 'src/interfaces/Category'
import { Location } from 'src/interfaces/Location'

type FilterOptions = {
  [P in keyof Category]?: Category[P]
} & { skip?: number; limit?: number }

export const useUserLocations = (filter?: FilterOptions) => {
  const { data, fetching } = useRequest<Location[]>(apiEndpoints.LOCATIONS_LIST, {
    params: filter || {}
  })

  return {
    data: data?.data,
    fetching
  }
}
