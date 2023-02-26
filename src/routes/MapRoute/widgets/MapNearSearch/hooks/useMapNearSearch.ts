import { useMapNearSearchQuery } from '../queries/MapNearSearchQuery'
import { useStore } from '@nanostores/react'
import { mapInstanceAtom, mapPositionAtom, mapSearchNearLayerAtom } from 'src/store/mapStore'
import { useCallback, useEffect } from 'react'
import { useSnackbar } from 'src/hooks/useSnackbar'
import { appConfig } from 'src/data/appConfig'
import { getMinDistanceBounds } from 'src/store/mapStore/mapInstance/selectors/getMinDistanceBounds'
import { mapLayers } from 'src/data/mapLayers'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'
import { useLinkConfig } from 'src/widgets/Link/hooks/useLinkConfig'
import { useRouter } from 'src/hooks/useRouter'

export const useMapNearSearch = () => {
  const router = useRouter()
  const nearSearch = useStore(mapSearchNearLayerAtom)
  const mapPosition = useStore(mapPositionAtom)
  const distance = useStore(getMinDistanceBounds)
  const map = useStore(mapInstanceAtom)
  const { open: openModal, close: closeModal } = useModal()
  const placeDetailLink = useLinkConfig('location', { locationSlug: 'testLocation' })

  const { open: openSnackbar } = useSnackbar({
    text: 'Too far away from destination',
    action: {
      text: 'Zoom to',
      onClick: () => {
        map?.flyTo({ zoom: appConfig.searchMaxZoom + 1, duration: 200 })
      }
    }
  })

  const [{ fetching, data }] = useMapNearSearchQuery({
    variables: {
      lat: mapPosition.center.lat,
      lng: mapPosition.center.lng,
      distance: Math.round(distance)
    },
    pause: !nearSearch.isVisible
  })

  useEffect(() => {
    mapSearchNearLayerAtom.set({
      ...mapSearchNearLayerAtom.get(),
      data: data?.searchNearPlace || []
    })
  }, [data])

  useEffect(() => {
    map?.on('click', mapLayers['near-search'], e => {
      const props = e.features[0].properties

      console.log(props)
      openModal(MODAL_NAMES.placePreview, {
        name: props.name,
        address: props.address,
        onConnect: () => openModal(MODAL_NAMES.postCreate),
        onDetail: async () => {
          await closeModal()
          router.navigate(placeDetailLink.link.name, placeDetailLink.routeParams)
        }
      })
    })
  }, [map])

  const startSearching = useCallback(() => {
    if (mapPosition.zoom > appConfig.searchMaxZoom) {
      mapSearchNearLayerAtom.set({ ...mapSearchNearLayerAtom.get(), isVisible: true })
    } else {
      openSnackbar()
    }
  }, [openSnackbar, mapPosition])

  const stopSearching = useCallback(() => {
    mapSearchNearLayerAtom.set({ ...mapSearchNearLayerAtom.get(), isVisible: false })
  }, [])

  useEffect(() => {
    if (nearSearch.isVisible && mapPosition.zoom < appConfig.searchMaxZoom) {
      stopSearching()
      openSnackbar()
    }
  }, [mapPosition.zoom, nearSearch, openSnackbar, stopSearching])

  useEffect(() => {
    return () => {
      stopSearching()
    }
  }, [stopSearching])

  return {
    isSearching: nearSearch.isVisible,
    fetching,
    startSearching,
    stopSearching
  }
}
