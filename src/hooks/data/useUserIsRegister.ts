import { apiEndpoints } from 'src/data/apiEndpoints'
import { useRequest } from '../useRequest'
import { AuthUser } from 'src/interfaces/User'

type Fields = Partial<Pick<AuthUser, 'username' | '_id' | 'mail'>>

export const useUserIsRegister = (queryFields: Fields, pause = false) => {
  const { data, error } = {}

  return {
    data,
    fetching: !data && !error
  }
}
