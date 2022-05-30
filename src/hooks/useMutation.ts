import { useSWRConfig } from 'swr'
import { useCallback, useState } from 'react'
import { useApiClient } from './useApiClient'
import { ApiResponseBody } from 'src/interfaces/Request'
import { getCacheKey } from '../utils/getCacheKey'

interface Options {
  useCache?: boolean
}

const DEFAULT_OPTIONS: Options = {
  useCache: true
}

export const useMutation = <RESDATA = any, DATA = undefined>(path: string, options = DEFAULT_OPTIONS) => {
  const { useCache } = options
  const apiClient = useApiClient()
  const [fetching, setFetching] = useState(false)
  const { mutate, cache } = useSWRConfig()

  const execute = useCallback(
    async (data: DATA) => {
      const cacheKey = getCacheKey(path, data)

      if (useCache && cache.get(cacheKey)) {
        return cache.get(cacheKey)
      }

      setFetching(true)
      const response = (await apiClient.post<ApiResponseBody<RESDATA>>(path, data)).data
      setFetching(false)

      if (useCache) {
        cache.set(cacheKey, response)
      }

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
