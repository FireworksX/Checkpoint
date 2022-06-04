import { useCurrentUser } from 'src/hooks/data/useCurrentUser'


export const useProfileFollowersRoute = () => {
  const { user } = useCurrentUser()

  return {
    user,
    followers: user?.followers || []
  }
}
