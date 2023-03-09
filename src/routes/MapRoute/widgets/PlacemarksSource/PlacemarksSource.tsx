import { FC, useMemo } from 'react'
import { Layer, Source } from 'react-map-gl'
import { useTheme } from 'styled-components'
import { usePlacesToGeojson } from '../../../../hooks/usePlacesToGeojson'
import { point } from '@turf/turf'
import { mapLayers } from '../../../../data/mapLayers'
import { useStore } from '@nanostores/react'
import { placemarksAtom } from '../../../../store/mapStore/placemarks'

interface PlacemarksSourceProps {}

const PlacemarksSource: FC<PlacemarksSourceProps> = () => {
  const placemarks = useStore(placemarksAtom)

  const parsePoints = usePlacesToGeojson(placemarks.data, place =>
    point([place.geometry.location.lng, place.geometry.location.lat], place)
  )

  const theme = useTheme()

  const layerStyle = useMemo(
    () => ({
      id: mapLayers.placemarks,
      type: 'circle',
      paint: {
        'circle-radius': ['interpolate', ['linear'], ['zoom'], 7, 5, 15, 7.5, 20, 10],
        'circle-color': theme.colors.backgroundDark,
        'circle-stroke-width': 3,
        'circle-stroke-color': theme.colors.secondaryBg
      },
      layout: {
        visibility: placemarks.isVisible ? 'visible' : 'none'
      }
    }),
    [theme, placemarks]
  )

  return (
    <Source type='geojson' data={parsePoints}>
      <Layer {...layerStyle} />
    </Source>
  )
}

export default PlacemarksSource
