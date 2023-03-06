import { useUserPostsQuery } from './UserPostsQuery'

export const useUserPosts = (userName?: string) => {
  const [{ data, fetching }] = useUserPostsQuery({
    variables: {
      userName: userName || ''
    },
    pause: !userName
  })

  return {
    posts: data?.postListByUserName || [],
    fetching
  }
}
