import useSWR from 'swr'
import { Key } from 'swr/dist/types'
import { ApiResponseBody } from 'src/interfaces/Request'

interface RequestOptions {
  revalidate?: boolean
  params?: Record<string, any>
  pause?: boolean
}

export const useRequest = <Data = any, Error = any, SWRKey extends Key = Key>(
  url: SWRKey,
  options?: RequestOptions
) => {
  const { params = {}, revalidate = false, pause = false } = options || {}

  const validParams = Object.keys(params).reduce<Record<string, string>>((acc, key) => {
    const value = params[key]

    if (value) {
      acc[key] =  value
    }
    return acc
  }, {})

  const usp = new URLSearchParams(validParams)

  // Create a stable key for SWR
  usp.sort()
  const qs = usp.toString()
  const resultUrl = qs ? `${url}?${qs}` : url

  const swrResponse = useSWR<ApiResponseBody<Data>>(!pause && resultUrl)

  return {
    ...swrResponse,
    fetching: (!swrResponse?.data && !swrResponse.error) || swrResponse.isValidating
  }
}
