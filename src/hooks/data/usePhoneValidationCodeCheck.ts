import { apiEndpoints } from 'src/data/apiEndpoints'
import { useMutation } from '../useMutation'
import { useRequest } from '../useRequest'

interface Props {
  phone: string
  code: string
}

export const usePhoneValidationCodeCheck = ({ phone, code }: Props) => {
  const { data, error } = useRequest<boolean>(apiEndpoints.AUTH_PHONE_CODE_CHECK, {
    params: {
      phone,
      code
    },
    pause: code.length !== 4
  })

  return {
    data,
    fetching: !data && !error
  }
}
