import { useRouter } from 'src/hooks/useRouter'
import { ROUTE_PARAMS } from 'src/router/constants'
import { useUserQuery } from '../queries/UserQuery'
import { userTokens } from '../../../utils/userTokens'

export const useUserRoute = () => {
  const { getParam } = useRouter()
  const userName = getParam(ROUTE_PARAMS.userSlug)
  const token = userTokens().getTokens().accessToken

  const [{ data, fetching }] = useUserQuery({
    variables: {
      userName,
      token
    }
  })

  const user = data?.getUserInfo

  return {
    fetching,
    user
  }
}
