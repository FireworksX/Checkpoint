import { hasNavigationAtom } from '../store/uiStore'
import { useIsomorphicEffect } from './useIsomorphicEffect'

export const useHideNavigation = () => {

  useIsomorphicEffect(() => {
    hasNavigationAtom.set(false)

    return () => hasNavigationAtom.set(true)
  }, [])
}
