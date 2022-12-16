import { useCurrentUser } from '../../../hooks/data/useCurrentUser/useCurrentUser'

export const useProfileRoute = () => {
  const { user, fetching } = useCurrentUser()

  return {
    user,
    fetching,
  }
}
