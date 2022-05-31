import { useCurrentUser } from 'src/hooks/data/useCurrentUser'

export const useProfileRoute = () => {
  const { user, fullName } = useCurrentUser()

  return {
    user,
    fullName
  }
}
