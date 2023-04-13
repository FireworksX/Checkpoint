import { usePlaceDetailQuery } from '../queries/PlaceDetail'
import { useRouter } from '../../../hooks/useRouter'
import { MODAL_NAMES, ROUTE_PARAMS } from '../../../router/constants'
import { usePlaceDetailConnectionsQuery } from '../queries/PlaceDetailConnections'
import { useCreatePost } from '../../../hooks/data/useCreatePost/useCreatePost'
import { userTokens } from '../../../utils/userTokens'
import { useEffect } from 'react'
import { useModal } from '../../../hooks/useModal'

export const useLocationDetailRoute = () => {
  const token = userTokens().getTokens().accessToken
  const { getParam } = useRouter()
  const placeSlug = getParam(ROUTE_PARAMS.locationSlug)
  const { updateContext, close } = useModal()

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

  useEffect(() => {
    updateContext(MODAL_NAMES.postCreate, {
      isLoading: createdPost.fetching
    })
  }, [createdPost.fetching, updateContext])

  const onConnect = async (text: string) => {
    await createPost({
      googleId: placeSlug,
      token,
      text
    })

    close()
  }

  return {
    name: placeData?.place?.name,
    address: placeData?.place?.address,
    connections: placeConnections?.postListByPlaceSlug || [],
    fetchingConnections,
    onConnect
  }
}
