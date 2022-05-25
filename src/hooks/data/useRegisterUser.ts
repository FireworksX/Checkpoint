import { useRecoilState } from 'recoil'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { useMutation } from 'src/hooks/useMutation'
import { AuthUser, AuthUserResponse } from 'src/interfaces/User'
import { authUserAtom } from 'src/store/userStore/atoms/authUserAtom'
import { GeneratedTokenResponse } from 'src/interfaces/Request'
import { useLoginUser } from './useLoginUser'

type InputProps = Omit<AuthUser, 'id' | 'token'>
type OutputProps = {
  user: AuthUserResponse
  token: GeneratedTokenResponse
}

export const useRegisterUser = () => {
  const { onSetTokens } = useLoginUser()
  const [, setAuthUser] = useRecoilState(authUserAtom)
  const { fetching, execute } = useMutation<OutputProps, InputProps>(apiEndpoints.AUTH_REGISTER)

  return {
    execute: async (data: InputProps) => {
      const response = await execute(data)

      if (response.success && response.data) {
        const { user, token } = response.data
        setAuthUser(currentData => ({
          ...currentData,
          ...user,
          id: user._id,
          token: token.accessToken,
          refreshToken: token.refreshToken
        }))

        onSetTokens({ accessToken: token.accessToken, refreshToken: token.refreshToken, userPhone: user.phone })
      }

      return response
    },
    fetching
  }
}
