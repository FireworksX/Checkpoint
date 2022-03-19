import { atom } from 'recoil'
import { Coords } from 'google-map-react'

export const mapCenterAtom = atom<Coords>({
  key: 'mapCenterAtom',
  default: {
    lat: 0,
    lng: 0
  }
})
