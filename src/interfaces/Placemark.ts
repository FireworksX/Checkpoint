import { LocationDetail } from './Location'

export type LocationPlacemark = Pick<
  LocationDetail,
  '_id' | 'slug' | 'author' | 'category' | 'coords' | 'likes' | 'bookmarks'
> & {
  title: string
  description?: string
}
