import { useRequest } from 'src/hooks/useRequest'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { LocationDetail } from 'src/interfaces/Location'

export const useMapSearchLocations = () => {
  const { data, fetching } = useRequest<LocationDetail[]>(apiEndpoints.FEED_LOCATIONS)

  return {
    list: data?.data || [],
    fetching
  }
}
