import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import { Key, SWRResponse } from 'swr/dist/types'

export const useRequest = <Data = any, Error = any, SWRKey extends Key = null>(
  key: SWRKey,
  revalidate = false
): SWRResponse<Data, Error> => {
  return revalidate ? useSWR<Data>(key) : useSWRImmutable<Data>(key)
}
