import { useCurrentUser } from 'src/hooks/data/useCurrentUser'


export const useProfileSubscribersRoute = () => {
  const { user } = useCurrentUser()

  return {
    user,
    subscribers: user?.subscribers || []
  }
}
