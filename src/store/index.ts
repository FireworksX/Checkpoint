import { RecoilState } from 'recoil'
import { mapCenterAtom, mapPlacemarksAtom, mapSaveCenterAtom, mapZoomAtom } from './mapStore'
import { hasNavigationAtom } from './uiStore'
import { geoLocationAtom } from './userStore'
import { userAgentAtom } from './configStore'
import { createConstants } from 'src/utils/createConstants'
import { authUserAtom } from './userStore/atoms/authUserAtom'

export type StoreAtomsType = typeof storeMap
export type StoreType = {
  [P in keyof StoreAtomsType]: StoreAtomsType[P] extends RecoilState<infer V> ? V : StoreAtomsType[P]
}

const STORE_NAMES = createConstants(
  'mapCenterAtom',
  'mapZoomAtom',
  'mapPlacemarksAtom',
  'mapSaveCenterAtom',
  'hasNavigationAtom',
  'geoLocationAtom',
  'userAgentAtom',
  'authUserAtom'
)

const storeMap: { [P in keyof typeof STORE_NAMES]: RecoilState<any> } = {
  [STORE_NAMES.mapCenterAtom]: mapCenterAtom,
  [STORE_NAMES.mapZoomAtom]: mapZoomAtom,
  [STORE_NAMES.mapPlacemarksAtom]: mapPlacemarksAtom,
  [STORE_NAMES.mapSaveCenterAtom]: mapSaveCenterAtom,
  [STORE_NAMES.hasNavigationAtom]: hasNavigationAtom,
  [STORE_NAMES.geoLocationAtom]: geoLocationAtom,
  [STORE_NAMES.userAgentAtom]: userAgentAtom,
  [STORE_NAMES.authUserAtom]: authUserAtom
}

export { STORE_NAMES, storeMap }
