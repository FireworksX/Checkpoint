import { usePlacemarksQuery } from './PlacemarksQuery'
import { userTokens } from '../../../utils/userTokens'
import { placemarksAtom } from '../../../store/mapStore/placemarks'
import { useIsomorphicEffect } from '../../useIsomorphicEffect'
import { useEffect } from 'react'
import { mapLayers } from '../../../data/mapLayers'
import { MODAL_NAMES } from '../../../router/constants'
import { useStore } from '@nanostores/react'
import { mapInstanceAtom } from '../../../store/mapStore'
import { useModal } from '../../useModal'
import LocationCard from '../../../widgets/LocationCard/LocationCard'
import Link from '../../../widgets/Link/Link'
import isBrowser from "../../../utils/isBrowser";

export const usePlacemarks = () => {
  const map = useStore(mapInstanceAtom)
  const token = userTokens().getTokens().accessToken
  const { open, close } = useModal()

  const [{ data }] = usePlacemarksQuery({
    variables: {
      token
    },
    pause: !isBrowser
  })

  const placemarks = data?.getPlacemarks || []

  useIsomorphicEffect(() => {
    placemarksAtom.setKey('data', placemarks)
  }, [])

  useEffect(() => {
    map?.on('click', mapLayers.placemarks, e => {
      const props = e.features[0].properties

      const postData = JSON.parse(props.post)

      console.log(postData);

      open(MODAL_NAMES.postPreview, {
        content: postData.text,
        author: postData.user,
        slug: postData.id,
        target: (
          <Link type='location' locationSlug={postData.place.googleId} waitNavigate={close}>
            <LocationCard name={postData.place.name} location={postData.place.address} />
          </Link>
        )
      })
    })
  }, [map, open])

  return {
    placemarks: data?.getPlacemarks || []
  }
}
