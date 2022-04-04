import { useRecoilState } from 'recoil'
import { hasNavigationAtom } from 'src/store/uiStore'

/**
 * Show / Hide bottom navigation and keep that condition
 * @param value
 */
export const useKeepNavigation = (value: boolean) => {
  const [_, setHasNavigation] = useRecoilState(hasNavigationAtom)

  setHasNavigation(value)
}
