import { useMutation } from 'src/hooks/useMutation'

interface Props {
  login: string
  password: string
}

export const useRegisterUser = () => {
  const { fetching, execute, mutate } = useMutation<any, Props>('/auth/register')

  return {
    execute: async (data: Props) => {
      const response = await execute(data)
      mutate('/users/profile', (currentData: any) => {
        return { ...currentData, username: data.login }
      }, false)
    },
    fetching
  }
}
