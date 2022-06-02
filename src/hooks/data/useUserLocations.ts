import { useRequest } from 'src/hooks/useRequest'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { Location } from 'src/interfaces/Location'

type FilterOptions = {
  [P in keyof Location]?: Location[P]
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
