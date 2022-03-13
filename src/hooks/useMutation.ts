import { useSWRConfig } from 'swr'
import { useCallback, useState } from 'react'
import { useApiClient } from './useApiClient'

type ResponseType<T = any> = { success: boolean, data: T }

export const useMutation = <RESDATA = any, DATA = any>(path: string) => {
  const apiClient = useApiClient()
  const [fetching, setFetching] = useState(false)
  const { mutate } = useSWRConfig()

  const execute = useCallback(
    async (data?: DATA) => {
      setFetching(true)
      const response = (await apiClient.post<ResponseType<RESDATA>>(path, data)).data
      setFetching(false)

      return response
    },
    [path]
  )

  return {
    execute,
    mutate,
    fetching
  }
}
