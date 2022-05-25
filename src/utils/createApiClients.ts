import axios from 'axios'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { AuthUserResponse } from '../interfaces/User'
import { ApiResponseBody, GeneratedTokenResponse } from '../interfaces/Request'
import { CookieManager } from '../interfaces/CookieManager'

interface ApiClientOptions {
  cookieManager?: CookieManager
}

interface RefreshTokenResponse {
  user: AuthUserResponse
  token: GeneratedTokenResponse
}

const DEFAULT_OPTIONS: ApiClientOptions = {}

export const createApiClients = ({ cookieManager } = DEFAULT_OPTIONS) => {
  const apiClient = axios.create({
    baseURL: '/api'
  })

  let tryRefresh = false

  apiClient.interceptors.request.use(req => {
    const accessToken = cookieManager?.get('accessToken')

    console.log(accessToken, req);
    if (req.headers && accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`
    }

    return req
  })

  apiClient.interceptors.response.use(
    config => {
      return config
    },
    async error => {
      const refreshToken = cookieManager?.get('refreshToken')
      const userPhone = cookieManager?.get('userPhone')
      const originalConfig = error.config

      if (error?.response?.status === 401 && userPhone && refreshToken && !tryRefresh) {
        tryRefresh = true
        try {
          const { data } = await apiClient.post<ApiResponseBody<RefreshTokenResponse>>(
            apiEndpoints.AUTH_REFRESH_TOKEN,
            {
              phone: userPhone,
              refreshToken
            }
          )

          console.log(data)
          if (data.success) {
            const token = data?.data?.token

            if (token) {
              apiClient.defaults.headers.common.Authorization = token.accessToken
              cookieManager?.set('accessToken', token.accessToken)
              cookieManager?.set('refreshToken', token.refreshToken)
            }
          }

          return apiClient(originalConfig)
        } catch (e) {
          return Promise.reject(e)
        }
      }
      return Promise.reject(error)
    }
  )

  return { apiClient }
}
