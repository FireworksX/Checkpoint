import { apiEndpoints } from 'src/data/apiEndpoints'
import { useCallback } from 'react'
import { useCurrentUser } from './useCurrentUser'

interface SubscribeInput {
  target: string
}

export const useFollowingUser = (targetId?: string) => {
  const {
    data,
    mutate,
    fetching: checkFetching
  } = {}

  const { user } = useCurrentUser()

  const { execute: executeSubscribe, fetching: subscribeFetching } = {}

  const { execute: executeUnsubscribe, fetching: unsubscribeFetching } = {}

  const onSubscribe = useCallback(async () => {
    if (!targetId) return

    await executeSubscribe({ target: targetId })
    await mutate()
  }, [executeSubscribe, targetId, mutate])

  const onUnsubscribe = useCallback(async () => {
    if (!targetId) return

    await executeUnsubscribe({ target: targetId })
    await mutate()
  }, [executeUnsubscribe, targetId, mutate])

  return {
    isSameUser: user?._id === targetId,
    isFollowing: !!data?.data, // Подписан ли авторизованный пользователь на того кого запросили
    fetching: checkFetching || subscribeFetching || unsubscribeFetching,
    onSubscribe,
    onUnsubscribe
  }
}
