import { atom } from 'recoil'
import { STORE_NAMES } from 'src/router/constants'

interface MapPositionAtomProps {
  lat: number
  lng: number
  zoom: number
  minZoom: number
  maxZoom: number
}

export const mapPositionAtom = atom<MapPositionAtomProps>({
  key: STORE_NAMES.mapPositionAtom,
  default: {
    lat: 0,
    lng: 0,
    zoom: 10,
    minZoom: 2,
    maxZoom: 17
  }
})
