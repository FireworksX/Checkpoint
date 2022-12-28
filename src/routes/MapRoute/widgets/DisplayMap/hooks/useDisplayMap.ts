import { useCallback } from 'react'
import { ViewStateChangeEvent } from 'react-map-gl/dist/esm/types/external'
import { useRecoilState } from 'recoil'
import { mapPositionAtom } from '../../../../../store/mapStore'
import { debounce } from '../../../../../utils/debounce'

export const useDisplayMap = () => {
  const [mapPosition, setMapPosition] = useRecoilState(mapPositionAtom)

  const onZoom = useCallback(
    debounce((e: ViewStateChangeEvent) => {
      setMapPosition(data => ({
        ...data,
        zoom: e.viewState.zoom
      }))
    }, 300),
    []
  )

  const onDrag = useCallback(
    debounce((e: ViewStateChangeEvent) => {
      setMapPosition(data => ({
        ...data,
          lat: e.viewState.latitude,
          lng: e.viewState.longitude
      }))
    }, 300),
    []
  )

  return {
    mapPosition,
    onZoom,
      onDrag
  }
}
