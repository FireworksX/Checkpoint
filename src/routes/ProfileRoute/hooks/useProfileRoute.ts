import { useCurrentUser } from '../../../hooks/data/useCurrentUser/useCurrentUser'
import { useUserPosts } from '../../../hooks/data/useUserPosts/useUserPosts'

export const useProfileRoute = () => {
  const { user, fetching } = useCurrentUser()
  const { posts, fetching: fetchingPosts } = useUserPosts(user?.userName)

  return {
    posts,
    user,
    fetching,
    fetchingPosts
  }
}
