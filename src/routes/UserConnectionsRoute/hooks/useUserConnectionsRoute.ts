import { useRouter } from 'src/hooks/useRouter'
import { ROUTE_PARAMS } from 'src/router/constants'
import {useUserRoute} from "../../UserRoute/hooks/useUserRoute";
import {useUserConnectionsQuery} from "../queries/UserConnectionsQuery";

export const useUserConnectionsRoute = () => {
  const { getParam } = useRouter()
  const userSlug = getParam(ROUTE_PARAMS.userSlug)
  const {user} = useUserRoute()

  const [{data}] = useUserConnectionsQuery({
    variables: {
      userName: userSlug
    }
  })

  const list = data?.userConnections


  return {
    user,
    connections: list || []
  }
}
