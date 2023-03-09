import { usePlaceDetailQuery } from '../queries/PlaceDetail'
import { useRouter } from '../../../hooks/useRouter'
import { ROUTE_PARAMS } from '../../../router/constants'
import { usePlaceDetailConnectionsQuery } from '../queries/PlaceDetailConnections'
import { useCreatePost } from '../../../hooks/data/useCreatePost/useCreatePost'
import { userTokens } from '../../../utils/userTokens'

export const useLocationDetailRoute = () => {
  const token = userTokens().getTokens().accessToken
  const { getParam } = useRouter()
  const placeSlug = getParam(ROUTE_PARAMS.locationSlug)

  const [createdPost, createPost] = useCreatePost()

  const [{ data: placeData }] = usePlaceDetailQuery({
    variables: {
      googleId: placeSlug
    }
  })

  const [{ data: placeConnections, fetching: fetchingConnections }] = usePlaceDetailConnectionsQuery({
    variables: {
      placeSlug: placeData?.place?.slug || ''
    },
    pause: !placeData?.place?.slug
  })

  const onConnect = async (text: string) =>
    createPost({
      googleId: placeSlug,
      token,
      text
    })

  return {
    name: placeData?.place?.name,
    address: placeData?.place?.address,
    connections: placeConnections?.postListByPlaceSlug || [],
    fetchingConnections,
    onConnect
  }
}
