import { apiEndpoints } from 'src/data/apiEndpoints'
import { useMutation } from 'src/hooks/useMutation'

interface Props {
  login: string
  password: string
}

export const useRegisterUser = () => {
  const { fetching, execute, mutate } = useMutation<any, Props>(apiEndpoints.AUTH_REGISTER)

  return {
    execute: async (data: Props) => {
      const response = await execute(data)
      mutate(
        apiEndpoints.USERS_PROFILE,
        (currentData: any) => {
          return { ...currentData, username: data.login }
        },
        false
      )
    },
    fetching
  }
}
