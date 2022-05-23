import { atom } from 'recoil'
import { Coords } from 'google-map-react'
import { STORE_NAMES } from 'src/router/constants'

interface Props {
  currentLocation?: Coords
  hasPermissions: boolean
}

export const geoLocationAtom = atom<Props>({
  key: STORE_NAMES.geoLocationAtom,
  default: {
    currentLocation: { lat: 0, lng: 0 },
    hasPermissions: false
  }
})
