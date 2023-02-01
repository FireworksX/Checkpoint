import { selector } from 'recoil'
import { STORE_NAMES } from '../../../../router/constants'
import { mapPositionAtom } from '../atoms/mapPositionAtom'
import {distance, point} from "@turf/turf";

export const getMinDistanceBounds = selector({
  key: STORE_NAMES.getMinDistanceBounds,
  get: ({ get }) => {
    const positions = get(mapPositionAtom)
    const targetPoint = point(positions.bounds[0])
    const centerPoint = point([positions.center.lng, positions.center.lat])

    return distance(targetPoint, centerPoint) * 1000
  }
})
