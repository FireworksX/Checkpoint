import { FC, useCallback } from 'react'
import { useFollowingUser } from 'src/hooks/data/useFollowingUser'

interface RenderProps {
  isFollowing: boolean
  fetching: boolean
  onClick(): Promise<void>
}

interface SubscribeContainerProps {
  targetId?: string
  children: (options: RenderProps) => JSX.Element
  className?: string
}

const SubscribeContainer: FC<SubscribeContainerProps> = ({ targetId, children }) => {
  const { isFollowing, fetching, onSubscribe, onUnsubscribe } = useFollowingUser(targetId)

  const onClick = useCallback(async () => {
    if (isFollowing) {
      await onUnsubscribe()
    } else {
      await onSubscribe()
    }
  }, [isFollowing, onUnsubscribe, onSubscribe])

  return children({ isFollowing, onClick, fetching })
}

export default SubscribeContainer
