import {useCallback, useMemo} from 'react'
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

  const [{ data, fetching }] = useCurrentUserQuery({
    variables: {
      token: userTokensManager.getTokens().accessToken,
      ip: cacheManager.get('x-user-ip')
    }
  })

  const user = useMemo(() => data?.getMe, [data])

  const logout = useCallback(async () => {
    userTokensManager.resetTokens()
    router.navigate(welcomeLink.link.name, welcomeLink.link.params)
  }, [userTokensManager, router, welcomeLink])

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
