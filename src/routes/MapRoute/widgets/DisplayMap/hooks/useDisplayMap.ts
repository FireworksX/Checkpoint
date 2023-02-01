import { useRecoilState } from 'recoil'
import { mapPositionAtom } from 'src/store/mapStore'

export const useDisplayMap = () => {
  const [mapPosition, setMapPosition] = useRecoilState(mapPositionAtom)

  return {
    mapPosition
  }
}
