import useSWR from 'swr'
import { Key, SWRResponse } from 'swr/dist/types'

export const useRequest = <Data = any, Error = any, SWRKey extends Key = null>(
  key: SWRKey
): SWRResponse<Data, Error> => {
  return useSWR<Data>(key)
}
