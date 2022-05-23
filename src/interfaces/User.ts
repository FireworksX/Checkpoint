export interface AuthUser {
  id: string
  token?: string
  refreshToken?: string
  firstName?: string
  lastName?: string
  username?: string
  bio?: string
  phone?: string
}

export type AuthUserResponse = Omit<AuthUser, 'id' | 'token'> & { _id: string }
