import { FC, useMemo } from 'react'
import { Layer, Source } from 'react-map-gl'
import { useTheme } from 'styled-components'
import { times } from '../../../../utils/times'
import { random } from '../../../../utils/random'

interface PlacemarksSourceProps {
  visible?: boolean
}

const marks = times(200).map(() => [random(0, 120), random(-50, 90)])

const geojson = {
  type: 'FeatureCollection',
  features: marks.map(mark => [{ type: 'Feature', geometry: { type: 'Point', coordinates: mark } }]).flat()
}

const PlacemarksSource: FC<PlacemarksSourceProps> = ({ visible = true }) => {
  const theme = useTheme()

  const layerStyle = useMemo(
    () => ({
      id: 'point',
      type: 'circle',
      paint: {
        'circle-radius': ['interpolate', ['linear'], ['zoom'], 7, 5, 15, 7.5, 20, 10],
        'circle-color': theme.colors.backgroundDark
      },
      layout: {
        visibility: visible ? 'visible' : 'none'
      }
    }),
    [theme, visible]
  )

  return (
    <Source type='geojson' data={geojson}>
      <Layer
        {...layerStyle}
      />
    </Source>
  )
}

export default PlacemarksSource
