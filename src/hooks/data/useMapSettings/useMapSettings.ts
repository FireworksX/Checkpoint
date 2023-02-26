import { useEffect } from 'react'
import {useStore} from "@nanostores/react";
import { useSaveMapSettingsMutation } from './SaveMapSettings'
import { mapPositionAtom } from '../../../store/mapStore'
import { userTokens } from '../../../utils/userTokens'
import { useDebounce } from '../../useDebounce'

export const useMapSettings = () => {
  const userTokensManager = userTokens()
  const token = userTokensManager.getTokens().accessToken
  const mapPosition = useStore(mapPositionAtom)

  const [_, execute] = useSaveMapSettingsMutation()

  const debouncedMapPosition = useDebounce(mapPosition, 5000)

  useEffect(() => {
    execute({
      center: debouncedMapPosition.center,
      zoom: debouncedMapPosition.zoom,
      token
    })
  }, [debouncedMapPosition, execute, token])
}
