import { LocationPlacemark } from 'src/interfaces/Placemark'
import { useCallback, useMemo } from 'react'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'
import { LocationPreloadModalContext } from 'src/modals/LocationPreloadModal/LocationPreloadModal'
import { useUserLocations } from 'src/hooks/data/useUserLocations'
import { useMapFilter } from 'src/routes/CityMapRoute/hooks/useMapFilter'

export const useMapPlacemarks = () => {
  const { user, category } = useMapFilter()

  const { data: locationsList } = useUserLocations({
    author: user?._id,
    category: category?._id
  })
  const { open, close } = useModal<LocationPreloadModalContext>(MODAL_NAMES.locationPreloadModal)

  const placemarks = useMemo<LocationPlacemark[]>(
    () =>
      (locationsList || []).map(location => ({
        _id: location._id,
        author: location.author,
        category: location.category,
        slug: location.slug,
        title: location.fields?.title || '',
        description: location.fields?.description,
        coords: location.coords,
        likes: location.likes
      })),
    [locationsList]
  )

  const onClickPlacemark = useCallback(
    (placemark: LocationPlacemark) =>
      open({
        placemark,
        onClose: close
      }),
    [open, close]
  )

  return {
    placemarks,
    onClickPlacemark
  }
}
