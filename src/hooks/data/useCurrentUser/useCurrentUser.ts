import { useCallback, useMemo } from 'react'
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
  const welcomeLink = useLinkConfig('welcome')
  const token = userTokensManager.getTokens().accessToken

  const [{ data, fetching }, revalidate] = useCurrentUserQuery({
    variables: {
      token,
      ip: cacheManager.get('x-user-ip')
    },
    pause: !token
  })

  const user = useMemo(() => data?.getMe, [data])

  const logout = useCallback(async () => {
    await revalidate({requestPolicy: "network-only"})
    userTokensManager.resetTokens()
    router.navigate(welcomeLink.link.name, welcomeLink.link.params)
  }, [userTokensManager, router, welcomeLink, revalidate])

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
