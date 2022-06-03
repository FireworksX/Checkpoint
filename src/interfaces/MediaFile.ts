import { BaseUser } from './User'

export interface MediaFile {
  fileName: string
  mimetype: string
  size: number
  path: string
  author: BaseUser
  createdAt: Date
}
