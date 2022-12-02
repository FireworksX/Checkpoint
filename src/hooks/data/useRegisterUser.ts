import { apiEndpoints } from 'src/data/apiEndpoints'
import { AuthUser, AuthUserResponse } from 'src/interfaces/User'
import { GeneratedTokenResponse } from 'src/interfaces/Request'
import { useLoginUser } from './useLoginUser'
import { useCurrentUser } from './useCurrentUser'

type InputProps = Omit<AuthUser, 'id' | 'token'>
type OutputProps = {
  user: AuthUserResponse
  token: GeneratedTokenResponse
}

export const useRegisterUser = () => {
  const { mutate } = useCurrentUser()
  const { onSetTokens } = useLoginUser()
  const { fetching, execute } = {}

  return {
    execute: async (data: InputProps) => {
      const response = await execute(data)

      if (response.success && response.data) {
        const { user, token } = response.data
        await mutate(currentData => ({
          ...currentData,
          ...user,
          id: user._id
        }))

        onSetTokens({ accessToken: token.accessToken, refreshToken: token.refreshToken, userPhone: user.phone })
      }

      return response
    },
    fetching
  }
}
