import { apiEndpoints } from 'src/data/apiEndpoints'
import { useMutation } from 'src/hooks/useMutation'
import { UserInterface } from 'src/interfaces/User'

interface Props {
  login: string
  password: string
}

export const useLoginUser = () => {
  const { fetching, execute, mutate } = useMutation<UserInterface, Props>(apiEndpoints.AUTH_LOGIN)

  return {
    execute: async (data: Props) => {
      const response = await execute(data)

      if (response.success) {
        mutate(apiEndpoints.USERS_PROFILE, response.data, true)
      }

      return response
    },
    fetching
  }
}
