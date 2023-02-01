import { atom, useRecoilState } from 'recoil'
import { MapRef } from 'react-map-gl'
import { STORE_NAMES } from 'src/router/constants'
import { mapPositionAtom } from './mapPositionAtom'

const formatBounds = (bounds: ReturnType<MapRef['getBounds']>): [[number, number], [number, number]] => [
  Object.values(bounds._ne),
  Object.values(bounds._sw)
]

export const mapInstanceAtom = atom<MapRef | undefined>({
  key: STORE_NAMES.mapInstanceAtom,
  default: undefined,
  effects: [
    params => {
      const [_, setMapPosition] = useRecoilState(mapPositionAtom)

      params.onSet(map => {
        if (map) {
          map.on('drag', data => {
            setMapPosition(prev => ({
              ...prev,
              bounds: formatBounds(map.getBounds()),
              center: {
                lat: data.viewState.latitude,
                lng: data.viewState.longitude
              }
            }))
          })

          map.on('zoom', data => {
            setMapPosition(prev => ({
              ...prev,
              zoom: data.viewState.zoom,
              bounds: formatBounds(map.getBounds()),
              center: {
                lat: data.viewState.latitude,
                lng: data.viewState.longitude
              }
            }))
          })
        }
      })
    }
  ]
})
