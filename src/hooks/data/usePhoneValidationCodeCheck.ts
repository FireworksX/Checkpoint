import { apiEndpoints } from 'src/data/apiEndpoints'
import { CountryCode } from 'src/data/countryPhoneCodes'

interface Props {
  phone: string
  code: string
  country: CountryCode
}

export const usePhoneValidationCodeCheck = ({ phone, code, country }: Props) => {
  const { data, error } = {}

  return {
    data,
    fetching: !data && !error
  }
}
