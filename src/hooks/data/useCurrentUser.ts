import { useCallback } from 'react'
import { useRequest } from 'src/hooks/useRequest'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { AuthUserResponse } from 'src/interfaces/User'
import { userTokens } from 'src/utils/userTokens'
import { useMutation } from 'src/hooks/useMutation'
import { MutatorOptions } from 'swr/dist/types'

type MutateCallback = (data?: AuthUserResponse) => AuthUserResponse

export const useCurrentUser = () => {
  const userTokensManager = userTokens()
  const { data: response, error, mutate } = useRequest<AuthUserResponse>(apiEndpoints.CURRENT_USER)
  const { execute: update } = useMutation<AuthUserResponse, Partial<AuthUserResponse>>(apiEndpoints.CURRENT_USER_UPDATE)

  const logout = useCallback(async () => {
    userTokensManager.resetTokens()
    await mutate(data => data, {
      optimisticData: {
        success: true,
        data: undefined
      }
    })
  }, [mutate, userTokensManager])

  const categories = response?.data?.categories || []

  const proxyMutate = useCallback(
    (callback: MutateCallback, options?: MutatorOptions) =>
      mutate(
        async apiUser => ({
          success: true,
          data: callback(apiUser?.data)
        }),
        options
      ),
    [mutate]
  )

  const removeCategory = useCallback(
    (categoryId: string) => {
      const user = response?.data
      const newCategories = user?.categories || []
      const position = newCategories.findIndex(({ _id }) => _id === categoryId)
      newCategories.splice(position, 1)

      const newUser = {
        _id: user?._id || '',
        ...user,
        categories: newCategories
      }

      proxyMutate(user => user, {
        optimisticData: {
          success: true,
          data: newUser
        }
      })
    },
    [proxyMutate, response]
  )

  return {
    isAuth: (response?.data?._id?.length || '') > 0 && !error,
    user: response?.data,
    categories,
    success: response?.success,
    fullName: [response?.data?.firstName, response?.data?.lastName].join(' '),
    error,
    revalidate: mutate,
    mutate: proxyMutate,
    fetching: false,
    update,
    logout,
    removeCategory
  }
}
