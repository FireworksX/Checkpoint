import { useRequest } from 'src/hooks/useRequest'
import { UserInterface } from 'src/interfaces/UserInterface'
import { apiEndpoints } from 'src/data/apiEndpoints'

export const useCurrentUser = () => {
  return useRequest<UserInterface>(apiEndpoints.USERS_PROFILE)
}
