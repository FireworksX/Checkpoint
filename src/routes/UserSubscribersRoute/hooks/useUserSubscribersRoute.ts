import { useRequest } from 'src/hooks/useRequest'
import { AuthUserResponse } from 'src/interfaces/User'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { useRouter } from 'src/hooks/useRouter'
import { ROUTE_PARAMS } from 'src/router/constants'

export const useUserSubscribersRoute = () => {
  const { getParam } = useRouter()
  const userSlug = getParam(ROUTE_PARAMS.userSlug)

  const { data: userResponse } = useRequest<AuthUserResponse>(`${apiEndpoints.USERS_DETAIL}/${userSlug}`)
  const user = userResponse?.data

  return {
    user,
    followers: user?.followers || []
  }
}
