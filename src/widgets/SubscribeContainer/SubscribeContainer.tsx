import React, { FC, useCallback } from 'react'
import { useSubscribeContainer } from './hooks/useSubscribeContainer'

interface RenderProps {
  fetching: boolean
  onClick(e: React.MouseEvent): Promise<boolean>
}

interface ConnectContainerProps {
  targetId: string
  isSubscribing: boolean
  children: (options: RenderProps) => JSX.Element
  className?: string
}

const SubscribeContainer: FC<ConnectContainerProps> = ({ targetId, isSubscribing, children }) => {
  const { fetching, subscribe, unSubscribe } = useSubscribeContainer(targetId)

  const onClick = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()

      if (isSubscribing) {
        return !(await unSubscribe())
      } else {
        return await subscribe()
      }
    },
    [isSubscribing, subscribe, unSubscribe]
  )

  return children({ onClick, fetching })
}

export default SubscribeContainer
