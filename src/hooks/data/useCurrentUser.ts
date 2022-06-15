import { useCallback } from 'react'
import { useRequest } from 'src/hooks/useRequest'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { AuthUserResponse } from 'src/interfaces/User'
import { userTokens } from 'src/utils/userTokens'
import { useMutation } from 'src/hooks/useMutation'

type MutateCallback = (data?: AuthUserResponse) => AuthUserResponse

export const useCurrentUser = () => {
  const userTokensManager = userTokens()
  const { data: response, error, mutate } = useRequest<AuthUserResponse>(apiEndpoints.CURRENT_USER)
  const { execute: update } = useMutation<AuthUserResponse, Partial<AuthUserResponse>>(apiEndpoints.CURRENT_USER_UPDATE)

  const logout = useCallback(async () => {
    userTokensManager.resetTokens()
    await mutate()
  }, [mutate, userTokensManager])

  return {
    isAuth: (response?.data?._id?.length || '') > 0 && !error,
    user: response?.data,
    success: response?.success,
    fullName: [response?.data?.firstName, response?.data?.lastName].join(' '),
    error,
    mutate: (callback: MutateCallback) => {
      return mutate(apiUser => ({
        success: true,
        data: callback(apiUser?.data)
      }))
    },
    fetching: false,
    update,
    logout
  }
}
