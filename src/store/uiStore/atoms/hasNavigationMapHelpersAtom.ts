import { atom } from 'recoil'
import { STORE_NAMES } from 'src/router/constants'

export const hasNavigationMapHelpersAtom = atom<boolean>({
  key: STORE_NAMES.hasNavigationMapHelpersAtom,
  default: false
})
