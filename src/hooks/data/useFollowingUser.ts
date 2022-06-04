import { useRequest } from '../useRequest'
import { apiEndpoints } from '../../data/apiEndpoints'
import { useMutation } from '../useMutation'
import { useCallback } from 'react'

interface SubscribeInput {
  target: string
}

export const useFollowingUser = (targetId: string) => {
  const { data, mutate } = useRequest<boolean>(apiEndpoints.CURRENT_USER_CHECK_SUBSCRIBE, {
    params: {
      target: targetId
    }
  })

  const { execute: executeSubscribe } = useMutation<unknown, SubscribeInput>(apiEndpoints.CURRENT_USER_SUBSCRIBE, {
    useCache: false
  })

  const { execute: executeUnsubscribe } = useMutation<unknown, SubscribeInput>(apiEndpoints.CURRENT_USER_UNSUBSCRIBE, {
    useCache: false
  })

  const onSubscribe = useCallback(async () => {
    await executeSubscribe({ target: targetId })
    await mutate()
  }, [executeSubscribe, targetId])

  const onUnsubscribe = useCallback(async () => {
    await executeUnsubscribe({ target: targetId })
    await mutate()
  }, [executeSubscribe, targetId])

  return {
    isFollowing: !!data?.data, // Подписан ли авторизованный пользователь на того кого запросили
    onSubscribe,
    onUnsubscribe
  }
}
