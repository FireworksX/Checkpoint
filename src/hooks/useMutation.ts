import { useSWRConfig } from 'swr'
import { useCallback, useState } from 'react'
import { useApiClient } from './useApiClient'
import { ApiResponseBody } from 'src/interfaces/Request'
import { getCacheKey } from '../utils/getCacheKey'
import { AxiosRequestConfig } from 'axios'

interface Options extends AxiosRequestConfig {
  useCache?: boolean
}

const DEFAULT_OPTIONS: Options = {
  useCache: false
}

export const useMutation = <OUTPUT = any, INPUT = undefined>(path: string, options = DEFAULT_OPTIONS) => {
  const { useCache, ...config } = options
  const apiClient = useApiClient()
  const [fetching, setFetching] = useState(false)
  const { mutate, cache } = useSWRConfig()

  const execute = useCallback(
    async (data: INPUT): Promise<ApiResponseBody<OUTPUT>> => {
      const cacheKey = getCacheKey(path, data)

      if (useCache && cache.get(cacheKey)) {
        return cache.get(cacheKey)
      }

      setFetching(true)
      const response = (
        await (apiClient?.post<ApiResponseBody<OUTPUT>, INPUT>(path, data, config) || Promise.resolve({ data: undefined }))
      ).data
      setFetching(false)

      if (useCache) {
        cache.set(cacheKey, response)
      }

      return response
    },
    [path, apiClient, cache, useCache, config]
  )

  return {
    execute,
    mutate,
    fetching
  }
}
