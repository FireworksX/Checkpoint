import { useStore } from 'src/store'

/**
 * Show / Hide bottom navigation and keep that condition
 * @param value
 */
export const useKeepNavigation = (value: boolean) => {
  const { setHasNavigation } = useStore.uiStore()

  setHasNavigation(value)
}
