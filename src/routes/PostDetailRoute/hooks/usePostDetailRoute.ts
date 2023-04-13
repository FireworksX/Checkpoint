import { usePostDetailQuery } from '../queries/PostDetailQuery'
import { useRouter } from '../../../hooks/useRouter'
import { ROUTE_PARAMS } from '../../../router/constants'

export const usePostDetailRoute = () => {
  const { getParam } = useRouter()
  const postSlug = getParam(ROUTE_PARAMS.postSlug)

  const [{ data, fetching }] = usePostDetailQuery({
    variables: {
      slug: postSlug
    }
  })

  return {
    postSlug,
    fetching,
    ...(data?.postListById || {})
  }
}
