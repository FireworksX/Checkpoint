import { atom } from 'recoil'
import { Coords } from 'google-map-react'
import { cacheService } from 'src/utils/cacheService'

interface Props {
  currentLocation?: Coords
  hasPermissions: boolean
}

export const geoLocationAtom = atom<Props>({
  key: 'geoLocationAtom',
  default: {
    currentLocation: { lat: 0, lng: 0 },
    hasPermissions: false
  }
})
