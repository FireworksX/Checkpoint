import { useMapNearSearchQuery } from '../queries/MapNearSearchQuery'
import { useRecoilState } from 'recoil'
import { mapPositionAtom, mapSearchNearLayerAtom } from '../../../../../store/mapStore'
import { useCallback, useEffect } from 'react'
import { useSnackbar } from '../../../../../hooks/useSnackbar'

export const useMapNearSearch = () => {
  const [nearSearch, setNearSearch] = useRecoilState(mapSearchNearLayerAtom)
  const [mapPosition, setMapPosition] = useRecoilState(mapPositionAtom)
  const { open: openSnackbar } = useSnackbar({
    text: 'You can search for new places only with a small zoom of the map'
  })

  const [{ fetching }] = useMapNearSearchQuery({
    variables: {
      lat: mapPosition.lat,
      lng: mapPosition.lng
    },
    pause: !nearSearch.isVisible
  })


  const startSearching = useCallback(() => {
    if (mapPosition.zoom > 14) {
      setNearSearch(oldValue => ({ ...oldValue, isVisible: true }))
    } else {
      openSnackbar()
    }
  }, [openSnackbar, setNearSearch, mapPosition])

  const stopSearching = useCallback(() => {
    setNearSearch(oldValue => ({ ...oldValue, isVisible: false }))
  }, [setNearSearch])

  useEffect(() => {
    if (nearSearch.isVisible && mapPosition.zoom < 14) {
      stopSearching()
      openSnackbar()
    }
  }, [mapPosition.zoom, nearSearch, openSnackbar, stopSearching])

  return {
    isSearching: nearSearch.isVisible,
    fetching,
    startSearching,
    stopSearching
  }
}
