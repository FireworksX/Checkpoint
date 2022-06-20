import { BaseUser } from './User'

export interface MediaFile {
  _id: string
  fileName: string
  mimetype: string
  size: number
  path: string
  author: BaseUser
  createdAt: Date
}
