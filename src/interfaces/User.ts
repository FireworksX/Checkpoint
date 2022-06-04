import { Category } from './Category'

export interface BaseUser {
  id: string
  firstName?: string
  lastName?: string
  username?: string
  bio?: string
  phone?: string
  categories?: Category[]
  followers?: BaseUser[]
  subscribers?: BaseUser[]
  counters?: {
    followers: number
    subscribers: number
    locations: number
  }
}

export interface AuthUser extends BaseUser {}

export type AuthUserResponse = Omit<AuthUser, 'id'> & { _id: string }
