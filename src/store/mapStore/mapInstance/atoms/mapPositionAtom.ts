import {atom} from 'nanostores'

export type LatLng = { lat: number; lng: number }

export interface MapPosition {
  center: LatLng
  zoom: number
  bounds: [[number, number], [number, number]]
}

export const mapPositionAtom = atom<MapPosition>({
  bounds: [
    [0, 0],
    [0, 0]
  ],
  center: {
    lat: 55.09512537378686,
    lng: 14.730376298457344
  },
  zoom: 10
})
