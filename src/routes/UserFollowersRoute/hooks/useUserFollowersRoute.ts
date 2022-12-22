import {useUserRoute} from "../../UserRoute/hooks/useUserRoute";
import {useRouter} from "../../../hooks/useRouter";
import {ROUTE_PARAMS} from "../../../router/constants";
import {useUserFollowersQuery} from "../queries/UserFollowersQuery";

export const useUserFollowersRoute = () => {
  const { getParam } = useRouter()
  const userSlug = getParam(ROUTE_PARAMS.userSlug)
  const {user} = useUserRoute()

  const [{data, fetching}] = useUserFollowersQuery({
    variables: {
      userName: userSlug
    }
  })

  const list = data?.userFollowers


  return {
    user,
    fetching,
    list: list || []
  }
}
