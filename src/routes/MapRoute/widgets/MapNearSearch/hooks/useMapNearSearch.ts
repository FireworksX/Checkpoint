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
import { useDebounce } from '../../../../../hooks/useDebounce'
import { useCreatePost } from '../../../../../hooks/data/useCreatePost/useCreatePost'
import { userTokens } from '../../../../../utils/userTokens'

export const useMapNearSearch = () => {
  const token = userTokens().getTokens().accessToken
  const nearSearch = useStore(mapSearchNearLayerAtom)
  const mapPosition = useDebounce(useStore(mapPositionAtom), 100)
  const distance = useDebounce(useStore(getMinDistanceBounds), 100)
  const map = useStore(mapInstanceAtom)
  const { open: openModal, modalContext, updateContext } = useModal()

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

  const [createdPost, createPost] = useCreatePost()

  useEffect(() => {
    updateContext(MODAL_NAMES.postCreate, {
      isLoading: createdPost.fetching
    })
  }, [createdPost, updateContext])

  const onConnect = useCallback(
    async (text: string, googleId: string) => {
      await createPost({
        text,
        googleId,
        token
      })

    },
    [createPost, token]
  )

  useEffect(() => {
    mapSearchNearLayerAtom.set({
      ...mapSearchNearLayerAtom.get(),
      data: data?.searchNearPlace || []
    })
  }, [data])

  useEffect(() => {
    map?.on('click', mapLayers['near-search'], e => {
      const props = e.features[0].properties

      openModal(MODAL_NAMES.placePreview, {
        name: props.name,
        address: props.address,
        slug: props.googleId,
        onConnect: () => openModal(MODAL_NAMES.postCreate, { onSubmit: text => onConnect(text, props.googleId) })
      })
    })
  }, [map, openModal])

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
