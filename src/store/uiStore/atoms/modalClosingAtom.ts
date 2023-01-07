import { atom } from 'recoil'
import { STORE_NAMES } from 'src/router/constants'

export const modalClosingAtom = atom<boolean>({
  key: STORE_NAMES.modalClosingAtom,
  default: false
})
