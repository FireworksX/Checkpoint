export type LikeType = 'location'

export interface Like {
  _id: string
  user: string
  target: string
  type: LikeType
  createdAt: string
}

export type MutateLike = Pick<Like, 'target' | 'type'>
