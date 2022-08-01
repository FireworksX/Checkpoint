import { apiEndpoints } from 'src/data/apiEndpoints'
import { useMutation } from '../useMutation'
import { CountryCode } from '../../data/countryPhoneCodes'

export const usePhoneValidationCodeCreate = () => {
  const { fetching, execute } = useMutation<{ code: string }, { phone: string; country: CountryCode }>(
    apiEndpoints.AUTH_PHONE_CODE_CREATE
  )

  return {
    execute,
    fetching
  }
}
