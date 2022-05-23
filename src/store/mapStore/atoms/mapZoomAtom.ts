import { atom } from 'recoil'
import { STORE_NAMES } from 'src/router/constants'

export const mapZoomAtom = atom<number>({
  key: STORE_NAMES.mapZoomAtom,
  default: 15
})
