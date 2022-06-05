import { atom } from 'recoil'
import { ModalName, STORE_NAMES } from 'src/router/constants'

export const modalAtom = atom<ModalName | undefined>({
  key: STORE_NAMES.modalAtom,
  default: undefined
})
