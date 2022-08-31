import { apiEndpoints } from 'src/data/apiEndpoints'
import { useMutation } from '../useMutation'

export const useMailValidationCodeCreate = () => {
  const { fetching, execute } = useMutation<{ code: string }, { mail: string}>(
    apiEndpoints.AUTH_MAIL_CODE_CREATE
  )

  return {
    execute,
    fetching
  }
}
