export type ApiResponseBody<T> = {
  success: boolean
  data?: T
  message?: string
}
