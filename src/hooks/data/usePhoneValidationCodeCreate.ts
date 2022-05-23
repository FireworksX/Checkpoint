import { apiEndpoints } from 'src/data/apiEndpoints'
import { useMutation } from '../useMutation'

export const usePhoneValidationCodeCreate = () => {
  const { fetching, execute } = useMutation<{ code: string }, { phone: string }>(apiEndpoints.AUTH_PHONE_CODE_CREATE)

  return {
    execute,
    fetching
  }
}
