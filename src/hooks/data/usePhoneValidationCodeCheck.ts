import { apiEndpoints } from 'src/data/apiEndpoints'
import { useMutation } from '../useMutation'
import { useRequest } from '../useRequest'
import {CountryCode} from "../../data/countryPhoneCodes";

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
