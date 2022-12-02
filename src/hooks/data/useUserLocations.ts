import { apiEndpoints } from 'src/data/apiEndpoints'
import { Location, LocationDetail } from 'src/interfaces/Location'

type FilterOptions = {
  [P in keyof Location]?: Location[P]
} & { skip?: number; limit?: number } & { onlyLikes?: boolean; owner?: string }

export const useUserLocations = (filter?: FilterOptions) => {
  const { data, fetching } = {}

  return {
    data: data?.data,
    fetching
  }
}
