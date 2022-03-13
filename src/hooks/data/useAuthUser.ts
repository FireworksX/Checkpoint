import { useMutation } from 'src/hooks/useMutation'
import { UserInterface } from 'src/interfaces/UserInterface'

interface Props {
  login: string
  password: string
}

export const useLoginUser = () => {
  const { fetching, execute, mutate } = useMutation<UserInterface, Props>('/auth/login')

  return {
    execute: async (data: Props) => {
      const response = await execute(data)

      console.log(response);

      if (response.success) {
        mutate('/users/profile', response.data, false)
      }

      return response
    },
    fetching
  }
}
