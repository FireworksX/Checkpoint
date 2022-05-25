import { useRecoilState } from 'recoil'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { useMutation } from 'src/hooks/useMutation'
import { AuthUser, AuthUserResponse } from 'src/interfaces/User'
import { authUserAtom } from 'src/store/userStore/atoms/authUserAtom'
import { GeneratedTokenResponse } from 'src/interfaces/Request'
import useCookies from '../useCookies'
import { useCallback } from 'react'

type InputProps = {
  phone: string
  code: string
}
type OutputProps = {
  user: AuthUserResponse
  token: GeneratedTokenResponse
}

export const useLoginUser = () => {
  const [, setAuthUser] = useRecoilState(authUserAtom)
  const { fetching, execute } = useMutation<OutputProps, InputProps>(apiEndpoints.AUTH_LOGIN)
  const [, setAccessToken] = useCookies('accessToken')
  const [, setRefreshToken] = useCookies('refreshToken')
  const [, setUserPhone] = useCookies('userPhone')

  const onSetTokens = useCallback(
    (options: Partial<{ userPhone: string; accessToken: string; refreshToken: string }>) => {
      setAccessToken(options.accessToken)
      setRefreshToken(options.refreshToken)
      setUserPhone(options.userPhone)
    },
    []
  )

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

        onSetTokens({
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          userPhone: user.phone
        })
      }

      return response
    },
    onSetTokens,
    fetching
  }
}
