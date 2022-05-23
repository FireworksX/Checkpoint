import { atom } from 'recoil'
import { Coords } from 'google-map-react'
import { STORE_NAMES } from 'src/router/constants'

export const mapSaveCenterAtom = atom<Coords>({
  key: STORE_NAMES.mapSaveCenterAtom,
  default: {
    lat: 0,
    lng: 0
  }
})
