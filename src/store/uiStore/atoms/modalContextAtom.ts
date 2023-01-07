import { atom } from 'recoil'
import { STORE_NAMES } from 'src/router/constants'
import { ModalsCtx } from '../../../hooks/useModal'

export const modalContextAtom = atom<ModalsCtx>({
  key: STORE_NAMES.modalContextAtom,
  default: {}
})
