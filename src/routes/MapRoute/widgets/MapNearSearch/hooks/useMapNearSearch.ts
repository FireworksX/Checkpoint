import { useMapNearSearchQuery } from '../queries/MapNearSearchQuery'
import {useRecoilState, useRecoilValue} from 'recoil'
import { mapPositionAtom, mapSearchNearLayerAtom } from '../../../../../store/mapStore'
import { useCallback, useEffect } from 'react'
import { useSnackbar } from '../../../../../hooks/useSnackbar'
import {appConfig} from "../../../../../data/appConfig";
import {getMinDistanceBounds} from "../../../../../store/mapStore/mapInstance/selectors/getMinDistanceBounds";

export const useMapNearSearch = () => {
  const [nearSearch, setNearSearch] = useRecoilState(mapSearchNearLayerAtom)
  const mapPosition = useRecoilValue(mapPositionAtom)
  const distance = useRecoilValue(getMinDistanceBounds)

  const { open: openSnackbar } = useSnackbar({
    text: 'Too far away from destination',
    action: {
      text: 'Zoom to',
      onClick: () => console.log('on zoom map')
    }
  })

  const [{ fetching }] = useMapNearSearchQuery({
    variables: {
      lat: mapPosition.center.lat,
      lng: mapPosition.center.lng,
      distance: Math.round(distance)
    },
    pause: !nearSearch.isVisible
  })

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
