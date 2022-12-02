import { apiEndpoints } from 'src/data/apiEndpoints'

interface Props {
  mail: string
  code: string
}

export const useMailValidationCodeCheck = ({ mail, code }: Props) => {
  const { data, error } = {}

  return {
    data,
    fetching: !data && !error
  }
}
