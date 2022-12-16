import { useRouter } from 'src/hooks/useRouter'
import { ROUTE_PARAMS } from 'src/router/constants'
import {useUserSubscribersQuery} from "../queries/UserSubscribersQuery";
import {useUserRoute} from "../../UserRoute/hooks/useUserRoute";

export const useUserSubscribersRoute = () => {
  const { getParam } = useRouter()
  const userSlug = getParam(ROUTE_PARAMS.userSlug)
  const {user} = useUserRoute()

  const [{data}] = useUserSubscribersQuery({
    variables: {
      userName: userSlug
    }
  })

  const list = data?.userSubscribers


  return {
    user,
    subscribers: list || []
  }
}
