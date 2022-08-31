import { apiEndpoints } from 'src/data/apiEndpoints'
import { useRequest } from 'src/hooks/useRequest'

interface Props {
  mail: string
  code: string
}

export const useMailValidationCodeCheck = ({ mail, code }: Props) => {
  const { data, error } = useRequest<boolean>(apiEndpoints.AUTH_MAIL_CODE_CHECK, {
    params: {
      mail,
      code
    },
    pause: code.length !== 4
  })

  return {
    data,
    fetching: !data && !error
  }
}
