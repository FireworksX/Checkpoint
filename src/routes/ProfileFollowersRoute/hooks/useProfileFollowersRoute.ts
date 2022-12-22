import {useCurrentUser} from "../../../hooks/data/useCurrentUser/useCurrentUser";
import {useUserFollowersQuery} from "../../UserFollowersRoute/queries/UserFollowersQuery";


export const useProfileFollowersRoute = () => {
  const { user, fetching: fetchingUser } = useCurrentUser()

  const [{data, fetching: fetchingSubscribers}] = useUserFollowersQuery({
    variables: {
      userName: user?.userName || ''
    }
  })

  const list = data?.userFollowers

  return {
    user,
    list,
    fetching: fetchingUser || fetchingSubscribers
  }
}
