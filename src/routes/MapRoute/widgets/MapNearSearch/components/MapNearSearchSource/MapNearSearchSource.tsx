import { FC, useMemo } from 'react'
import { useTheme } from 'styled-components'
import { Layer, Source } from 'react-map-gl'
import { useRecoilValue } from 'recoil'
import { mapPositionAtom, mapSearchNearLayerAtom } from 'src/store/mapStore'
import { mapLayers } from 'src/data/mapLayers'
import { useMapNearSearchQuery } from '../../queries/MapNearSearchQuery'
import { usePlacesToGeojson } from '../../../../../../hooks/usePlacesToGeojson'
import { point } from '@turf/turf'
import { getMinDistanceBounds } from '../../../../../../store/mapStore/mapInstance/selectors/getMinDistanceBounds'

interface MapNearSearchSourceProps {
  className?: string
}

const MapNearSearchSource: FC<MapNearSearchSourceProps> = () => {
  const nearSearch = useRecoilValue(mapSearchNearLayerAtom)
  const mapPosition = useRecoilValue(mapPositionAtom)
  const distance = useRecoilValue(getMinDistanceBounds)

  const [{ data }] = useMapNearSearchQuery({
    variables: {
      lat: mapPosition.center.lat,
      lng: mapPosition.center.lng,
      distance: Math.round(distance)
    },
    pause: !nearSearch.isVisible
  })

  const parsePoints = usePlacesToGeojson(data?.searchNearPlace || [], place =>
    point([place.geometry.location.lng, place.geometry.location.lat], place)
  )

  const theme = useTheme()

  const layerStyle = useMemo(
    () => ({
      id: mapLayers['near-search'],
      type: 'circle',
      paint: {
        'circle-radius': ['interpolate', ['linear'], ['zoom'], 7, 5, 15, 7.5, 20, 10],
        'circle-color': theme.colors.backgroundDark,
        'circle-stroke-width': 3,
        'circle-stroke-color': theme.colors.secondaryBg
      },
      layout: {
        visibility: nearSearch.isVisible ? 'visible' : 'none'
      }
    }),
    [theme, nearSearch]
  )

  return (
    <Source type='geojson' data={parsePoints}>
      <Layer {...layerStyle} />
    </Source>
  )
}

export default MapNearSearchSource
