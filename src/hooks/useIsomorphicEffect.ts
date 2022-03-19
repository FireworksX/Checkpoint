import { DependencyList, EffectCallback, useEffect } from 'react'
import isBrowser from 'src/utils/isBrowser'
import { useFirstMountState } from 'react-use'

/*
Аналог useEffect только который ещё выполняется на SSR
 */
export const useIsomorphicEffect = (callback: EffectCallback, deps: DependencyList = []) => {
  const isFirstMount = useFirstMountState()

  if (!isBrowser && isFirstMount) {
    callback()
  }

  useEffect(callback, deps)
}
