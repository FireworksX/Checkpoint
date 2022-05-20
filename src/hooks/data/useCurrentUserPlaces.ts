import { useRequest } from '../useRequest'
import { useCurrentUser } from './useCurrentUser'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { PlaceInterface } from 'src/interfaces/PlaceInterface'

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
