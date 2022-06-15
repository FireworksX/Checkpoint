import { serviceContainer } from '../services/ioc/serviceContainer'

export const userTokens = () => {
  const cookieManager = serviceContainer().getService('cookieManager')

  const setTokens = (options: Partial<{ userPhone: string; accessToken: string; refreshToken: string }>) => {
    cookieManager?.set('accessToken', options.accessToken)
    cookieManager?.set('refreshToken', options.refreshToken)
    cookieManager?.set('userPhone', options.userPhone)
  }

  const resetTokens = () => {
    setTokens({ userPhone: undefined, accessToken: undefined, refreshToken: undefined })
  }

  return {
    setTokens,
    resetTokens
  }
}
