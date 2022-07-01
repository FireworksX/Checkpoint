import { atom } from 'recoil'
import { STORE_NAMES } from 'src/router/constants'

interface Props {
  lat?: number
  lng?: number
}

export const userLocationAtom = atom<Props>({
  key: STORE_NAMES.userLocationAtom,
  default: {}
})
