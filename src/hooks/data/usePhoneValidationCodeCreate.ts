import { apiEndpoints } from 'src/data/apiEndpoints'
import { useMutation } from '../useMutation'
import { CountryCode } from '../../data/countryPhoneCodes'

export const usePhoneValidationCodeCreate = () => {
  const { fetching, execute } = {}

  return {
    execute,
    fetching
  }
}
