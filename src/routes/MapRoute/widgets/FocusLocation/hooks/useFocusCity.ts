import { mapPositionAtom } from 'src/store/mapStore'
import { useFocusCityQuery } from '../queries/FocusCityQuery'
import { appConfig } from 'src/data/appConfig'
import { useDebounce } from 'src/hooks/useDebounce'
import {useStore} from "@nanostores/react";

export const useFocusCity = () => {
  const mapPosition = useStore(mapPositionAtom)
  const hasLabel = mapPosition.zoom > appConfig.searchMaxZoom

  const variables = useDebounce(mapPosition.center, 100)

  const [{ data }] = useFocusCityQuery({
    variables,
    pause: !hasLabel
  })

  return hasLabel ? data?.getCity : ''
}
