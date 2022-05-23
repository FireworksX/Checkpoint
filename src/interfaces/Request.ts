export type ApiResponseBody<T> = {
  success: boolean
  data?: T
  message?: string
}

export interface GeneratedTokenResponse {
  type: 'Bearer',
  accessToken: string
  refreshToken: string
  expiresIn: number
}
