export interface AuthUser {
  id: string
  firstName?: string
  lastName?: string
  username?: string
  bio?: string
  phone?: string
}

export type AuthUserResponse = Omit<AuthUser, 'id'> & { _id: string }
