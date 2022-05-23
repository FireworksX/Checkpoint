import { apiEndpoints } from 'src/data/apiEndpoints'
import { useMutation } from '../useMutation'
import { useRequest } from '../useRequest'
import {AuthUser} from "../../interfaces/User";

interface Props {
  phone: string
  code: string
}

type Fields = Partial<Pick<AuthUser, 'username' | 'id' | 'phone'>>

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
