import mem from 'mem'
import { ApiClient } from './createApiClients'
import { CookieManager } from '../../interfaces/CookieManager'
import { apiEndpoints } from '../../data/apiEndpoints'
import { ApiResponseBody, GeneratedTokenResponse } from '../../interfaces/Request'
import { AuthUserResponse } from '../../interfaces/User'
import { AxiosInstance, AxiosResponse } from 'axios'

interface Options {
  apiClient: AxiosInstance
  cookieManager?: CookieManager
}

interface RefreshTokenResponse {
  user: AuthUserResponse
  token: GeneratedTokenResponse
}

const refreshToken = async ({ apiClient, cookieManager }: Options) => {
  const refreshToken = cookieManager?.get('refreshToken')
  const userMail = cookieManager?.get('userMail')

  try {
    const { data } = await apiClient.post<ApiResponseBody<RefreshTokenResponse>>(apiEndpoints.AUTH_REFRESH_TOKEN, {
      mail: userMail,
      refreshToken
    })

    if (data?.success) {
      const token = data?.data?.token

      if (token) {
        cookieManager?.set('accessToken', token.accessToken)
        cookieManager?.set('refreshToken', token.refreshToken)
      }
    }

    return data
  } catch (e) {
    console.log(e, 'refreshToken error');
    // cookieManager?.set('accessToken', '')
    // cookieManager?.set('refreshToken', '')

    return undefined
  }
}

export default mem(refreshToken, { maxAge: 10000 })
