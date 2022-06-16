import { atom } from 'recoil'
import { STORE_NAMES } from 'src/router/constants'

export const modalContextAtom = atom<any>({
  key: STORE_NAMES.modalContextAtom,
  default: undefined
})
