import { computed } from 'nanostores'
import { mapPositionAtom } from '../atoms/mapPositionAtom'
import { distance, point } from '@turf/turf'

export const getMinDistanceBounds = computed(mapPositionAtom, positions => {
  const targetPoint = point(positions.bounds[0])
  const centerPoint = point([positions.center.lng, positions.center.lat])

  return distance(targetPoint, centerPoint) * 1000
})
