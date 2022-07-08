import { LocationDetail } from './Location'

export type LocationPlacemark = Pick<LocationDetail, '_id' | 'slug' | 'author' | 'category' | 'coords'> & {
  title: string
  description?: string
}
