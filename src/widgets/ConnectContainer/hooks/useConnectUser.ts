import { useCallback } from 'react'
import { useConnectUserMutation } from 'src/widgets/ConnectContainer/queries/ConnectUserMutation'
import { userTokens } from 'src/utils/userTokens'
import {useUnConnectUserMutation} from "src/widgets/ConnectContainer/queries/UnConnectUserMutation";

export const useConnectUser = (targetId: string) => {
  const token = userTokens().getTokens().accessToken

  const [{ fetching: connectFetching }, connectUser] = useConnectUserMutation()
  const [{ fetching: unConnectFetching }, unConnectUser] = useUnConnectUserMutation()


  const connect = useCallback(async () => {
    if (!targetId) return false

    const response = await connectUser({ userName: targetId, token })
    return response.data?.connect || false
  }, [connectUser, targetId, token])

  const unConnect = useCallback(async () => {
    if (!targetId) return false

    const response = await unConnectUser({ userName: targetId, token })
    return response.data?.unConnect || false
  }, [targetId, unConnectUser, token])

  return {
    fetching: connectFetching || unConnectFetching,
    connect,
    unConnect
  }
}
