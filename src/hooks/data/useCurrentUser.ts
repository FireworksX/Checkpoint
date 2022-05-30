import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { useRequest } from 'src/hooks/useRequest'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { useIsomorphicEffect } from 'src/hooks/useIsomorphicEffect'
import { authUserAtom } from 'src/store/userStore/atoms/authUserAtom'
import { AuthUserResponse } from 'src/interfaces/User'
import isBrowser from '../../utils/isBrowser'
import { useSWRConfig } from 'swr'
import { useState } from 'react'
import { useForceUpdate } from '../useForceUpdate'

export const useCurrentUser = () => {
  const forceUpdate = useForceUpdate()
  const authUser = useRecoilValue(authUserAtom)
  const setAuthUser = useSetRecoilState(authUserAtom)
  // const { data: response, error } = useRequest<AuthUserResponse>(apiEndpoints.CURRENT_USER)
  //
  // useIsomorphicEffect(() => {
  //   const { success, data } = response || {}
  //
  //   if (success && data) {
  //     setAuthUser(currentData => ({
  //       ...currentData,
  //       ...data,
  //       id: data._id
  //     }))
  //     forceUpdate()
  //   }
  // }, [response, setAuthUser])


  return {
    user: authUser,
    fetching: false
  }
}
