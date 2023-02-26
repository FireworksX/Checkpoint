import { atom, onSet } from 'nanostores'
import { MapRef } from 'react-map-gl'
import { mapPositionAtom } from './mapPositionAtom'

const formatBounds = (bounds: ReturnType<MapRef['getBounds']>): [[number, number], [number, number]] => [
  Object.values(bounds._ne),
  Object.values(bounds._sw)
]

export const mapInstanceAtom = atom<MapRef | undefined>(undefined)

onSet(mapInstanceAtom, ({ newValue: map }) => {
  if (map) {
    map.on('drag', data => {
      console.log(data);
      mapPositionAtom.set({
        ...mapPositionAtom.get(),
        bounds: formatBounds(map.getBounds()),
        center: {
          lat: data.viewState.latitude,
          lng: data.viewState.longitude
        }
      })
    })

    map.on('zoom', data => {
      mapPositionAtom.set({
        ...mapPositionAtom.get(),
        zoom: data.viewState.zoom,
        bounds: formatBounds(map.getBounds()),
        center: {
          lat: data.viewState.latitude,
          lng: data.viewState.longitude
        }
      })
    })
  }
})
