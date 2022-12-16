import {useCurrentUser} from "../../../hooks/data/useCurrentUser/useCurrentUser";


export const useProfileFollowersRoute = () => {
  const { user, fetching } = useCurrentUser()

  return {
    user,
    fetching,
    followers: []
  }
}
