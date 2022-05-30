import { selector } from 'recoil'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { ApiResponseBody } from 'src/interfaces/Request'
import { STORE_NAMES } from 'src/router/constants'
import { serviceContainer } from 'src/services/ioc/serviceContainer'
import { AuthUserResponse } from 'src/interfaces/User'

export const authUserSelector = selector({
  key: STORE_NAMES.authUserSelector,
  get: async () => {
    try {
      const apiClient = serviceContainer().getService('apiClient')
      const cacheManager = serviceContainer().getService('cacheManager')

      if (apiClient) {
        const response = await apiClient.get<ApiResponseBody<AuthUserResponse>>(apiEndpoints.CURRENT_USER)

        if (response.success) {
          return response.data
        }
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
})
