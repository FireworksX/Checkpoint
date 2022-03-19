import { atom } from 'recoil'

export const mapZoomAtom = atom<number>({
  key: 'mapZoomAtom',
  default: 15
})
