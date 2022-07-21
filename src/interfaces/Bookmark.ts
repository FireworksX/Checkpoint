export type BookmarkType = 'location'

export interface Bookmark {
  _id: string
  user: string
  target: string
  category: string
  type: BookmarkType
  createdAt: string
}

export type AddBookmark = Pick<Bookmark, 'target' | 'type' | 'category'>
export type RemoveBookmark = Pick<Bookmark, 'target' | 'type'>
