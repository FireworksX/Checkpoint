import { useCurrentUser } from '../../../hooks/data/useCurrentUser/useCurrentUser'
import {useUserConnectionsQuery} from "../../UserConnectionsRoute/queries/UserConnectionsQuery";

export const useProfileConnectionsRoute = () => {
  const { user, fetching: fetchingUser } = useCurrentUser()

  const [{data, fetching: fetchingConnections}] = useUserConnectionsQuery({
    variables: {
      userName: user?.userName || ''
    }
  })

  const list = data?.userConnections

  return {
    user,
    list,
    fetching: fetchingUser || fetchingConnections
  }
}
