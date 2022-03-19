import { atom } from 'recoil'
import { Coords } from 'google-map-react'
import { cacheService } from 'src/utils/cacheService'

export const userCurrentLocationAtom = atom<Coords | undefined>({
  key: 'userCurrentLocationAtom',
  default: cacheService().getItem('selfLocation')
})
