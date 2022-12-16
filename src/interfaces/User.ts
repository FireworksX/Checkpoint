import { Category } from './Category'
import { CountryCode } from '../data/countryPhoneCodes'

export interface BaseUser {
  _id: string
  firstName?: string
  lastName?: string
  verify?: boolean
  userName?: string
  bio?: string
  mail?: string
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
