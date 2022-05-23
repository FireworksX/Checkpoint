import { atom } from 'recoil'
import { Coords } from 'google-map-react'
import { STORE_NAMES } from 'src/router/constants'

export type Placemark = {
  id: string | number // Unique id for search / remove
} & Coords

export const mapPlacemarksAtom = atom<Placemark[]>({
  key: STORE_NAMES.mapPlacemarksAtom,
  default: []
})
