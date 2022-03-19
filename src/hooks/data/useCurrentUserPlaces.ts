import { useRequest } from '../useRequest'
import { useCurrentUser } from './useCurrentUser'
import { PlaceInterface } from 'server/interfaces/PlaceInterface'
import { apiEndpoints } from 'src/data/apiEndpoints'

export const useCurrentUserPlaces = () => {
  const { data: userData } = useCurrentUser()

  return useRequest<PlaceInterface[]>(apiEndpoints.PLACES_USER, {
    params: {
      userId: userData?.data?.id
    },
    revalidate: true,
    pause: !userData?.data?.id
  })
}
