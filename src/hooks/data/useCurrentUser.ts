import { useRequest } from 'src/hooks/useRequest'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { AuthUserResponse } from 'src/interfaces/User'

type MutateCallback = (data?: AuthUserResponse) => AuthUserResponse

export const useCurrentUser = () => {
  const { data: response, error, mutate } = useRequest<AuthUserResponse>(apiEndpoints.CURRENT_USER)

  return {
    isAuth: (response?.data?._id?.length || '') > 0,
    user: response?.data,
    success: response?.success,
    error,
    mutate: (callback: MutateCallback) =>
      mutate(apiUser => ({
        success: true,
        data: callback(apiUser?.data)
      })),
    fetching: false
  }
}
