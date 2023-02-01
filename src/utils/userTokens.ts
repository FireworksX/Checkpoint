import { serviceContainer } from 'src/services/ioc/serviceContainer'

export const userTokens = () => {
  const cookieManager = serviceContainer().getService('cookieManager')

  const setTokens = (options: Partial<{ accessToken: string }>) => {
    cookieManager?.set('accessToken', options.accessToken)
  }

  const getTokens = () => ({
    accessToken: cookieManager.get('accessToken')!
  })

  const resetTokens = () => {
    setTokens({ accessToken: undefined })
  }

  return {
    setTokens,
    getTokens,
    resetTokens
  }
}
