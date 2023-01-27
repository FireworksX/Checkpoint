import { useCallback } from 'react'
import { ViewStateChangeEvent } from 'react-map-gl/dist/esm/types/external'
import { useRecoilState } from 'recoil'
import { mapPositionAtom } from 'src/store/mapStore'
import { debounce } from 'src/utils/debounce'

export const useDisplayMap = () => {
  const [mapPosition, setMapPosition] = useRecoilState(mapPositionAtom)

  const setZoom = useCallback(
    debounce((e: ViewStateChangeEvent) => {
      setMapPosition(data => ({
        ...data,
        zoom: e.viewState.zoom,
        lat: e.viewState.latitude,
        lng: e.viewState.longitude
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
    setZoom,
    onDrag,
  }
}
