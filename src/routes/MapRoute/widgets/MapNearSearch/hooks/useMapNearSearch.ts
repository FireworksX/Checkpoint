import { useMapNearSearchQuery } from '../queries/MapNearSearchQuery'
import { useRecoilState, useRecoilValue } from 'recoil'
import { mapInstanceAtom, mapPositionAtom, mapSearchNearLayerAtom } from 'src/store/mapStore'
import { useCallback, useEffect } from 'react'
import { useSnackbar } from 'src/hooks/useSnackbar'
import { appConfig } from 'src/data/appConfig'
import { getMinDistanceBounds } from 'src/store/mapStore/mapInstance/selectors/getMinDistanceBounds'
import { mapLayers } from 'src/data/mapLayers'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'
import {useLinkConfig} from "src/widgets/Link/hooks/useLinkConfig";
import {useRouter} from "src/hooks/useRouter";

export const useMapNearSearch = () => {
  const router = useRouter()
  const [nearSearch, setNearSearch] = useRecoilState(mapSearchNearLayerAtom)
  const mapPosition = useRecoilValue(mapPositionAtom)
  const distance = useRecoilValue(getMinDistanceBounds)
  const map = useRecoilValue(mapInstanceAtom)
  const { open: openPlacePreview, close: closePlacePreview } = useModal(MODAL_NAMES.placePreview)
  const { open: openPostCreate } = useModal(MODAL_NAMES.postCreate)
  const placeDetailLink = useLinkConfig('location', {locationSlug: 'testLocation'})

  const { open: openSnackbar } = useSnackbar({
    text: 'Too far away from destination',
    action: {
      text: 'Zoom to',
      onClick: () => {
        map?.flyTo({ zoom: appConfig.searchMaxZoom + 1 })
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
    setNearSearch((prevValue) => ({
      ...prevValue,
      data: data?.searchNearPlace || []
    }))
  }, [data, setNearSearch])

  useEffect(() => {
    map?.on('click', mapLayers['near-search'], e => {
      const props = e.features[0].properties
      openPlacePreview({
        name: props.name,
        address: props.address,
        onConnect: openPostCreate,
        onDetail: async () => {
          await closePlacePreview()
          router.navigate(placeDetailLink.link.name, placeDetailLink.routeParams)
        }
      })
    })
  }, [map])

  const startSearching = useCallback(() => {
    if (mapPosition.zoom > appConfig.searchMaxZoom) {
      setNearSearch(oldValue => ({ ...oldValue, isVisible: true }))
    } else {
      openSnackbar()
    }
  }, [openSnackbar, setNearSearch, mapPosition])

  const stopSearching = useCallback(() => {
    setNearSearch(oldValue => ({ ...oldValue, isVisible: false }))
  }, [setNearSearch])

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
