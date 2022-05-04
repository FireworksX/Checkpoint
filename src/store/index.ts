import { mapCenterAtom, mapPlacemarksAtom, mapSaveCenterAtom, mapZoomAtom } from './mapStore'
import { hasNavigationAtom } from './uiStore'
import { geoLocationAtom } from './userStore'
import { userAgentAtom } from './configStore'
import { createConstants } from 'src/utils/createConstants'

export type StoreType = Record<string, any>

const storeNames = createConstants(
  'mapCenterAtom',
  'mapZoomAtom',
  'mapPlacemarksAtom',
  'mapSaveCenterAtom',
  'hasNavigationAtom',
  'geoLocationAtom',
  'userAgentAtom'
)

export const storeMap = {
  [mapCenterAtom.key]: mapCenterAtom,
  [mapZoomAtom.key]: mapZoomAtom,
  [mapPlacemarksAtom.key]: mapPlacemarksAtom,
  [mapSaveCenterAtom.key]: mapSaveCenterAtom,
  [hasNavigationAtom.key]: hasNavigationAtom,
  [geoLocationAtom.key]: geoLocationAtom,
  [userAgentAtom.key]: userAgentAtom
}
