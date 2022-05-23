import { atom } from 'recoil'
import { Coords } from 'google-map-react'
import { STORE_NAMES } from 'src/router/constants'

export const mapCenterAtom = atom<Coords>({
  key: STORE_NAMES.mapCenterAtom,
  default: {
    lat: 0,
    lng: 0
  }
})
