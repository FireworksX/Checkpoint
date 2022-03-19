import { atom } from 'recoil'
import { Coords } from 'google-map-react'

export type Placemark = {
  id: string | number // Unique id for search / remove
} & Coords

export const mapPlacemarksAtom = atom<Placemark[]>({
  key: 'mapPlacemarksAtom',
  default: []
})
