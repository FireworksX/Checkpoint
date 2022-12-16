import {useUserRoute} from "../../UserRoute/hooks/useUserRoute";

export const useUserFollowersRoute = () => {
  const {user} = useUserRoute()


  return {
    user,
    followers: []
  }
}
