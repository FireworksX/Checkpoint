import React, { FC } from 'react'
import { MutateLike } from '../../interfaces/Likes'
import { useLikesUser } from '../../hooks/data/useLikesUser'

export interface LikesContainerRenderProps {
  hasLike: boolean
  fetching: boolean
  onClick(e: React.MouseEvent): Promise<void>
}

interface LikesContainerProps {
  initialLike?: boolean
  type: MutateLike['type']
  target: MutateLike['target']
  children: (options: LikesContainerRenderProps) => JSX.Element
}

const LikesContainer: FC<LikesContainerProps> = ({ children, type, initialLike, target }) => {
  const { toggleLike, fetching, hasLike } = useLikesUser(initialLike, {
    type,
    target
  })

  return children({ hasLike, onClick: toggleLike, fetching })
}

export default LikesContainer
