import { mapCenterAtom, mapPlacemarksAtom, mapSaveCenterAtom, mapZoomAtom } from './mapStore'
import { hasNavigationAtom } from './uiStore'
import { geoLocationAtom } from './userStore'
import { userAgentAtom } from './configStore'
import { createConstants } from 'src/utils/createConstants'
import { RecoilState } from 'recoil'

export type StoreAtomsType = typeof storeMap
export type StoreType = {
  [P in keyof StoreAtomsType]: StoreAtomsType[P] extends RecoilState<infer V> ? V : StoreAtomsType[P]
}

export const STORE_NAMES = createConstants(
  'mapCenterAtom',
  'mapZoomAtom',
  'mapPlacemarksAtom',
  'mapSaveCenterAtom',
  'hasNavigationAtom',
  'geoLocationAtom',
  'userAgentAtom'
)

export const storeMap = {
  [STORE_NAMES.mapCenterAtom]: mapCenterAtom,
  [STORE_NAMES.mapZoomAtom]: mapZoomAtom,
  [STORE_NAMES.mapPlacemarksAtom]: mapPlacemarksAtom,
  [STORE_NAMES.mapSaveCenterAtom]: mapSaveCenterAtom,
  [STORE_NAMES.hasNavigationAtom]: hasNavigationAtom,
  [STORE_NAMES.geoLocationAtom]: geoLocationAtom,
  [STORE_NAMES.userAgentAtom]: userAgentAtom
}
