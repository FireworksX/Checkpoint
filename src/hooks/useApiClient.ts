import { createApiClients } from 'src/utils/createApiClients'
import useCookies from './useCookies'
import { useIsomorphicEffect } from './useIsomorphicEffect'
import { useRef } from 'react'

const { apiClient: initialApiClient } = createApiClients()

export const useApiClient = () => {
  const apiClient = useRef(initialApiClient)
  const [accessToken] = useCookies('accessToken')

  useIsomorphicEffect(() => {
    apiClient.current = createApiClients({ accessToken }).apiClient
  }, [accessToken])

  return apiClient.current
}
