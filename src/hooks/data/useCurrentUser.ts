import { useRequest } from 'src/hooks/useRequest'

export const useCurrentUser = <T = any>() => {
  return useRequest('/users/profile')
}
