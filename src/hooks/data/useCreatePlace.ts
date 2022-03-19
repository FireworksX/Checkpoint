import { useMutation } from '../useMutation'
import { PlaceInterface, PlaceInterfaceCreate } from 'server/interfaces/PlaceInterface'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'

export const useCreatePlace = () => {
  const { data: userData } = useCurrentUser()
  const { mutate, fetching, execute } = useMutation<PlaceInterface, PlaceInterfaceCreate>(apiEndpoints.PLACES_CREATE)

  return {
    fetching,
    async onCreate(inputPlace: PlaceInterfaceCreate) {
      const { success, data } = await execute(inputPlace)

      if (success) {
        const getParamsUser = new URLSearchParams({ userId: userData?.data?.id || '' })
        mutate(`${apiEndpoints.PLACES_USER}?${getParamsUser.toString()}`)
      }

      return {
        data,
        success
      }
    }
  }
}
