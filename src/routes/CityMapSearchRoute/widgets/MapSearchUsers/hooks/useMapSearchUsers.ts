import { useRequest } from 'src/hooks/useRequest'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { BaseUser } from 'src/interfaces/User'

export const useMapSearchUsers = () => {
  const { data, fetching } = useRequest<BaseUser[]>(apiEndpoints.FEED_USERS)

  return {
    list: data?.data || [],
    fetching
  }
}
