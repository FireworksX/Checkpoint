import { mapPlacemarksAtom } from './atoms/mapPlacemarksAtom'
import { mapSaveCenterAtom } from './atoms/mapSaveCenterAtom'
import { mapLayersAtom } from './atoms/mapLayersAtom'
import { mapSearchNearLayerAtom } from './atoms/mapSearchNearLayerAtom'
import { mapInstanceAtom, mapPositionAtom } from './mapInstance'

export interface MapLayer<T = unknown> {
  isVisible?: boolean
  data: T
}

export { mapPositionAtom, mapPlacemarksAtom, mapSaveCenterAtom, mapLayersAtom, mapSearchNearLayerAtom, mapInstanceAtom }
