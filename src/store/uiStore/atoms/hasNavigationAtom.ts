import { atom } from 'recoil'

export const hasNavigationAtom = atom<boolean>({
  key: 'hasNavigationAtom',
  default: false
})
