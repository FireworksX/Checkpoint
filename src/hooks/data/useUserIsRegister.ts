import { apiEndpoints } from 'src/data/apiEndpoints'
import { useRequest } from '../useRequest'
import { AuthUser } from 'src/interfaces/User'

interface Props {
  phone: string
  code: string
}

type Fields = Partial<Pick<AuthUser, 'username' | '_id' | 'phone' | 'country'>>

export const useUserIsRegister = (queryFields: Fields, pause = false) => {
  const { data, error } = useRequest<boolean>(apiEndpoints.USER_IS_REGISTER, {
    params: queryFields,
    pause
  })

  return {
    data,
    fetching: !data && !error
  }
}
