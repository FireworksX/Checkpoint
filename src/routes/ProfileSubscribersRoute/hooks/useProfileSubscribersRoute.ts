import { useCurrentUser } from '../../../hooks/data/useCurrentUser/useCurrentUser'
import {useUserSubscribersQuery} from "../../UserSubscribersRoute/queries/UserSubscribersQuery";

export const useProfileSubscribersRoute = () => {
  const { user, fetching: fetchingUser } = useCurrentUser()

  const [{data, fetching: fetchingSubscribers}] = useUserSubscribersQuery({
    variables: {
      userName: user?.userName || ''
    }
  })

  const list = data?.userSubscribers

  return {
    user,
    subscribers: list,
    fetching: fetchingUser || fetchingSubscribers
  }
}
