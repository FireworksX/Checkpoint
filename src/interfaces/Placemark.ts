import { LocationDetail } from './Location'

export type LocationPlacemark = Pick<LocationDetail, '_id' | 'slug' | 'author' | 'category' | 'coords' | 'likes'> & {
  title: string
  description?: string
}
