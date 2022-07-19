import { useRecoilState } from 'recoil'
import { hasNavigationAtom } from '../store/uiStore'
import { useIsomorphicEffect } from './useIsomorphicEffect'

export const useHideNavigation = () => {
  const [, setHasNavigation] = useRecoilState(hasNavigationAtom)

  useIsomorphicEffect(() => {
    setHasNavigation(false)

    return () => setHasNavigation(true)
  }, [])
}
