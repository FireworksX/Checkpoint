import React, { FC, useCallback } from 'react'
import { useFollowingUser } from 'src/hooks/data/useFollowingUser'
import { useConnectUser } from './hooks/useConnectUser'

interface RenderProps {
  fetching: boolean
  onClick(e: React.MouseEvent): Promise<boolean>
}

interface ConnectContainerProps {
  targetId: string
  isConnecting: boolean
  children: (options: RenderProps) => JSX.Element
  className?: string
}

const ConnectContainer: FC<ConnectContainerProps> = ({ targetId, isConnecting, children }) => {
  const { fetching, connect, unConnect } = useConnectUser(targetId)

  const onClick = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()

      if (isConnecting) {
        return !(await unConnect())
      } else {
        return await connect()
      }
    },
    [isConnecting, unConnect, connect]
  )

  return children({ onClick, fetching })
}

export default ConnectContainer
