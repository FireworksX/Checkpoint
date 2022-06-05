import React, { FC, useCallback } from 'react'
import { useFollowingUser } from 'src/hooks/data/useFollowingUser'

interface RenderProps {
  isSameUser: boolean
  isFollowing: boolean
  fetching: boolean
  onClick(e: React.MouseEvent): Promise<void>
}

interface SubscribeContainerProps {
  targetId?: string
  children: (options: RenderProps) => JSX.Element
  className?: string
}

const SubscribeContainer: FC<SubscribeContainerProps> = ({ targetId, children }) => {
  const { isFollowing, fetching, isSameUser, onSubscribe, onUnsubscribe } = useFollowingUser(targetId)

  const onClick = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()

      if (isFollowing) {
        await onUnsubscribe()
      } else {
        await onSubscribe()
      }
    },
    [isFollowing, onUnsubscribe, onSubscribe]
  )

  return children({ isFollowing, isSameUser, onClick, fetching })
}

export default SubscribeContainer
