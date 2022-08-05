import { apiEndpoints } from 'src/data/apiEndpoints'
import { useRequest } from 'src/hooks/useRequest'
import { CountryCode } from 'src/data/countryPhoneCodes'

interface Props {
  phone: string
  code: string
  country: CountryCode
}

export const usePhoneValidationCodeCheck = ({ phone, code, country }: Props) => {
  const { data, error } = useRequest<boolean>(apiEndpoints.AUTH_PHONE_CODE_CHECK, {
    params: {
      phone,
      code,
      country
    },
    pause: code.length !== 4
  })

  return {
    data,
    fetching: !data && !error
  }
}
