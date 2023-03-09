import { useRouter } from 'src/hooks/useRouter'
import { MODAL_NAMES, ROUTE_PARAMS } from 'src/router/constants'
import { useUserQuery } from '../queries/UserQuery'
import { userTokens } from '../../../utils/userTokens'
import { useUserPosts } from '../../../hooks/data/useUserPosts/useUserPosts'
import { useCreatePost } from '../../../hooks/data/useCreatePost/useCreatePost'
import { useCallback } from 'react'
import { useModal } from '../../../hooks/useModal'

export const useUserRoute = () => {
  const { open } = useModal()
  const { getParam } = useRouter()
  const userName = getParam(ROUTE_PARAMS.userSlug)
  const token = userTokens().getTokens().accessToken

  const [{ data, fetching }] = useUserQuery({
    variables: {
      userName,
      token
    }
  })
  const user = data?.getUserInfo

  const { posts, fetching: fetchingPosts } = useUserPosts(userName)
  const [createdPost, createPost] = useCreatePost()

  const onConnectPost = useCallback(
    async (parentPostId: string, text: string) => {
      await createPost({
        googleId,
        text,
        parentId: parentPostId,
        token
      })

      console.log(createdPost)
    },
    [createdPost, createPost, token]
  )

  return {
    fetching,
    fetchingPosts,
    user,
    posts,
    connectPost: (postId: string) => {
      open(MODAL_NAMES.postCreate, {
        onSubmit: (text: string) => onConnectPost(postId, text)
      })
    }
  }
}
