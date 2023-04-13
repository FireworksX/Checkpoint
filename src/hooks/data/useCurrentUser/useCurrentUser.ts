import { useCallback, useEffect, useMemo } from 'react'
import { userTokens } from 'src/utils/userTokens'
import { useCurrentUserQuery } from './CurrentUserQuery'
import { useCacheManager } from '../../useCacheManager'
import { buildFullName } from '../../../utils/buildFullName'
import { useRouter } from '../../useRouter'
import { useLinkConfig } from '../../../widgets/Link/hooks/useLinkConfig'
import { promiseWaiter } from 'src/utils/promiseWaiter'

export const useCurrentUser = () => {
  const router = useRouter()
  const userTokensManager = userTokens()
  const cacheManager = useCacheManager()
  const [welcomeLink] = useLinkConfig('welcome')
  const token = userTokensManager.getTokens().accessToken

  const [{ data, fetching }, revalidate] = useCurrentUserQuery({
    variables: {
      token: token || '',
      ip: cacheManager.get('x-user-ip')
    }
  })

  const user = useMemo(() => data?.getMe, [data])

  useEffect(() => {
    if (!user) {
      router.navigate(welcomeLink.link.name, welcomeLink.link.params)
    }
  }, [user, router, welcomeLink])

  const logout = async () => {
    userTokensManager.resetTokens()
    revalidate({ requestPolicy: 'network-only' })
  }

  const update = useCallback(async () => {
    await promiseWaiter(300)
  }, [])

  return {
    user,
    fullName: buildFullName(user?.firstName, user?.lastName),
    fetching,
    logout,
    update
  }
}
