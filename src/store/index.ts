import { RecoilState, RecoilValueReadOnly } from 'recoil'
import { mapPlacemarksAtom, mapSaveCenterAtom } from './mapStore'
import {hasNavigationAtom, modalAtom} from './uiStore'
import { geoLocationAtom } from './userStore'
import { userAgentAtom } from './configStore'
import { STORE_NAMES } from 'src/router/constants'

export type StoreAtomsType = typeof storeMap
export type StoreType = {
  [P in keyof StoreAtomsType]: StoreAtomsType[P] extends RecoilState<infer V>
    ? V
    : StoreAtomsType[P] extends RecoilValueReadOnly<infer V2>
    ? V2
    : StoreAtomsType[P]
}

const storeMap = {
  [STORE_NAMES.mapPlacemarksAtom]: mapPlacemarksAtom,
  [STORE_NAMES.mapSaveCenterAtom]: mapSaveCenterAtom,
  [STORE_NAMES.geoLocationAtom]: geoLocationAtom,
  [STORE_NAMES.userAgentAtom]: userAgentAtom,
  [STORE_NAMES.modalAtom]: modalAtom,
  [STORE_NAMES.hasNavigationAtom]: hasNavigationAtom
}

export { storeMap }
