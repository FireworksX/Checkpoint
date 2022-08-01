import { apiEndpoints } from 'src/data/apiEndpoints'
import { useMutation } from 'src/hooks/useMutation'
import { AuthUserResponse } from 'src/interfaces/User'
import { GeneratedTokenResponse } from 'src/interfaces/Request'
import useCookies from '../useCookies'
import { useCallback } from 'react'
import { useCurrentUser } from './useCurrentUser'
import { userTokens } from '../../utils/userTokens'
import { CountryCode } from 'src/data/countryPhoneCodes'

type InputProps = {
  phone: string
  code: string
  country: CountryCode
}
type OutputProps = {
  user: AuthUserResponse
  token: GeneratedTokenResponse
}

export const useLoginUser = () => {
  const userTokensManager = userTokens()
  const { mutate } = useCurrentUser()
  const { fetching, execute } = useMutation<OutputProps, InputProps>(apiEndpoints.AUTH_LOGIN)

  return {
    execute: async (data: InputProps) => {
      const response = await execute(data)

      if (response.success && response.data) {
        const { user, token } = response.data
        mutate(currentData => ({
          ...currentData,
          ...user,
          id: user._id
        }))

        userTokensManager.setTokens({
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          userPhone: user.phone
        })
      }

      return response
    },
    onSetTokens: userTokensManager.setTokens,
    fetching
  }
}
