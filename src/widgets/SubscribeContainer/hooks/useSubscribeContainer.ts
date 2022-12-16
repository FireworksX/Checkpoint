import { useCallback } from 'react'
import { userTokens } from '../../../utils/userTokens'
import {useSubscribeUserMutation} from "../queries/SubscribeUserMutation";
import {useUnSubscribeUserMutationMutation} from "../queries/UnSubscribeUserMutation";

export const useSubscribeContainer = (targetId: string) => {
  const token = userTokens().getTokens().accessToken

  const [{ fetching: subscribeFetching }, subscribeUser] = useSubscribeUserMutation()
  const [{ fetching: unSubscribeFetching }, unSubscribeUser] = useUnSubscribeUserMutationMutation()


  const subscribe = useCallback(async () => {
    if (!targetId) return

    const response = await subscribeUser({ userName: targetId, token })
    return response.data?.subscribe || false
  }, [subscribeUser, targetId, token])

  const unSubscribe = useCallback(async () => {
    if (!targetId) return

    const response = await unSubscribeUser({ userName: targetId, token })
    return response.data?.unSubscribe || false
  }, [targetId, unSubscribeUser, token])

  return {
    fetching: subscribeFetching || unSubscribeFetching,
    subscribe,
    unSubscribe
  }
}
