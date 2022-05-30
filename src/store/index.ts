import { RecoilState, RecoilValueReadOnly } from 'recoil'
import { mapCenterAtom, mapPlacemarksAtom, mapSaveCenterAtom, mapZoomAtom } from './mapStore'
import { hasNavigationAtom, hasNavigationMapHelpersAtom } from './uiStore'
import { geoLocationAtom } from './userStore'
import { userAgentAtom } from './configStore'
import { authUserAtom } from './userStore/atoms/authUserAtom'
import { STORE_NAMES } from 'src/router/constants'
import { authUserSelector } from './userStore/selectors/authUserSelector'

export type StoreAtomsType = typeof storeMap
export type StoreType = {
  [P in keyof StoreAtomsType]: StoreAtomsType[P] extends RecoilState<infer V>
    ? V
    : StoreAtomsType[P] extends RecoilValueReadOnly<infer V2>
    ? V2
    : StoreAtomsType[P]
}

const storeMap = {
  [STORE_NAMES.mapCenterAtom]: mapCenterAtom,
  [STORE_NAMES.mapZoomAtom]: mapZoomAtom,
  [STORE_NAMES.mapPlacemarksAtom]: mapPlacemarksAtom,
  [STORE_NAMES.mapSaveCenterAtom]: mapSaveCenterAtom,
  [STORE_NAMES.hasNavigationAtom]: hasNavigationAtom,
  [STORE_NAMES.geoLocationAtom]: geoLocationAtom,
  [STORE_NAMES.userAgentAtom]: userAgentAtom,
  [STORE_NAMES.authUserAtom]: authUserAtom,
  [STORE_NAMES.hasNavigationMapHelpersAtom]: hasNavigationMapHelpersAtom,
  [STORE_NAMES.authUserSelector]: authUserSelector
}

export { storeMap }
