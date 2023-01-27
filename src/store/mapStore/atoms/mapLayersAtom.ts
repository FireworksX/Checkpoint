import { atom } from 'recoil'
import { STORE_NAMES } from 'src/router/constants'

export type MapLayer = 'placemark' | 'search-near'

export const mapLayersAtom = atom<MapLayer[]>({
  key: STORE_NAMES.mapLayersAtom,
  default: []
})
