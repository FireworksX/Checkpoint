import { AuthUser, BaseUser } from './User'

export interface Category {
  _id: string
  name: string
  slug: string
  description?: string
  author: string
  icon?: string
  createdAt: string
}

export type PopulateCategory = Omit<Category, 'author'> & {
  author: BaseUser
}
