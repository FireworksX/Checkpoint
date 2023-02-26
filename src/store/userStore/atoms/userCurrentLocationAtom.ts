import { atom } from 'nanostores'
import { Coords } from 'google-map-react'

interface Props {
  currentLocation?: Coords
  zoom?: number
  hasPermissions: boolean
}

export const geoLocationAtom = atom<Props>({
  currentLocation: { lat: 0, lng: 0 },
  hasPermissions: false
})
