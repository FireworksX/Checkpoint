import { Category } from "./Category";

export interface BaseUser {
  id: string
  firstName?: string
  lastName?: string
  username?: string
  bio?: string
  phone?: string
}

export interface AuthUser extends BaseUser{
  categories: Category[]
}

export type AuthUserResponse = Omit<AuthUser, 'id'> & { _id: string }
