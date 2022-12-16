import { AuthUserResponse } from 'src/interfaces/User'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { useRouter } from 'src/hooks/useRouter'
import { ROUTE_PARAMS } from 'src/router/constants'
import {useUserRoute} from "../../UserRoute/hooks/useUserRoute";

export const useUserFollowersRoute = () => {
  const { getParam } = useRouter()
  const userSlug = getParam(ROUTE_PARAMS.userSlug)

  const {user} = useUserRoute()


  return {
    user,
    followers: (user?.followers || []).filter(Boolean)
  }
}
