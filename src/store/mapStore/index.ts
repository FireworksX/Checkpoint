import { mapPlacemarksAtom } from './atoms/mapPlacemarksAtom'
import { mapLayersAtom } from './atoms/mapLayersAtom'
import { mapSearchNearLayerAtom } from './atoms/mapSearchNearLayerAtom'
import { mapInstanceAtom, mapPositionAtom } from './mapInstance'

export interface MapLayer<T = unknown> {
  isVisible?: boolean
  data: T
}

export { mapPositionAtom, mapPlacemarksAtom, mapLayersAtom, mapSearchNearLayerAtom, mapInstanceAtom }
