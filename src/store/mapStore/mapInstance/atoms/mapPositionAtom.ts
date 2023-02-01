import { atom } from 'recoil'
import { STORE_NAMES } from 'src/router/constants'

export type LatLng = { lat: number; lng: number }

export interface MapPosition {
  center: LatLng
  zoom: number
  bounds: [[number, number], [number, number]]
}

export const mapPositionAtom = atom<MapPosition>({
  key: STORE_NAMES.mapPositionAtom,
  default: {
    bounds: [
      [0, 0],
      [0, 0]
    ],
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 10
  }
})
