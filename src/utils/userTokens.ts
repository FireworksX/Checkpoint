import { serviceContainer } from '../services/ioc/serviceContainer'

export const userTokens = () => {
  const cookieManager = serviceContainer().getService('cookieManager')

  const setTokens = (options: Partial<{ userMail: string; accessToken: string; refreshToken: string }>) => {
    cookieManager?.set('accessToken', options.accessToken)
    cookieManager?.set('refreshToken', options.refreshToken)
    cookieManager?.set('userMail', options.userMail)
  }

  const resetTokens = () => {
    setTokens({ userMail: undefined, accessToken: undefined, refreshToken: undefined })
  }

  return {
    setTokens,
    resetTokens
  }
}
