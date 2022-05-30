import { Reducer, useReducer } from 'react'

export function useForceUpdate() {
  // dispatch don't have action and don't changes between rerenders
  return useReducer<Reducer<object, null>>(() => ({}), {})[1] as () => void
}
