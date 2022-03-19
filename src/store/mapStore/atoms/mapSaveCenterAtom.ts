import { atom } from 'recoil'
import { Coords } from 'google-map-react'

export const mapSaveCenterAtom = atom<Coords>({
  key: 'mapSaveCenterAtom',
  default: {
    lat: 0,
    lng: 0
  }
})
