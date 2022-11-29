import axios, { AxiosRequestConfig } from 'axios'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { AuthUserResponse } from 'src/interfaces/User'
import { ApiResponseBody, GeneratedTokenResponse } from 'src/interfaces/Request'
import { CookieManager } from 'src/interfaces/CookieManager'
import refreshToken from './refreshToken'

interface ApiClientOptions {
  cookieManager?: CookieManager
  cache?: CookieManager
}

export interface ApiClient {
  get<T>(path: string, config?: AxiosRequestConfig): Promise<T>
  post<T, D = any>(path: string, data?: D, config?: AxiosRequestConfig): Promise<T>
}

const DEFAULT_OPTIONS: ApiClientOptions = {}

const BASE_URL = `${import.meta.env.VITE_CURRENT_DOMAIN}/api/v1`

const restClient = axios.create({
  baseURL: BASE_URL
})

const createRestClient = ({ cookieManager } = DEFAULT_OPTIONS): ApiClient => {
  restClient.interceptors.request.use(req => {
    const accessToken = cookieManager?.get('accessToken')

    if (req.headers && accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`
    }

    return req
  })

  restClient.interceptors.response.use(
    config => {
      return config
    },
    async error => {
      // const config = error?.config

      // if (error?.response?.status === 401 && !config?.refresh) {
      //   config.refresh = true
      //
      //   const result = await refreshToken({ apiClient, cookieManager })
      //
      //   const accessToken = result?.data?.token.accessToken
      //
      //   if (accessToken) {
      //     config.headers = {
      //       ...config.headers,
      //       Authorization: `Bearer ${accessToken}`
      //     }
      //   }
      //
      //   return apiClient(config)
      // }
      return Promise.reject(error)
    }
  )

  return restClient
}

export const createApiClients = ({ cookieManager } = DEFAULT_OPTIONS) => {
  const apiClient = createRestClient({ cookieManager })

  return { apiClient }
}
