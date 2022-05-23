import { atom } from 'recoil'
import { STORE_NAMES } from 'src/router/constants'

export const hasNavigationAtom = atom<boolean>({
  key: STORE_NAMES.hasNavigationAtom,
  default: false
})
