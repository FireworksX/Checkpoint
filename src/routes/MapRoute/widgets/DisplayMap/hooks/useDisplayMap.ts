import { mapPositionAtom } from 'src/store/mapStore'
import {useStore} from "@nanostores/react";

export const useDisplayMap = () => {
  const mapPosition = useStore(mapPositionAtom)

  return {
    mapPosition
  }
}
