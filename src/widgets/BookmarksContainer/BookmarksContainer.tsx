import React, { FC } from 'react'
import { MutateBookmark } from '../../interfaces/Bookmark'
import { useBookmarksUser } from '../../hooks/data/useBookmarksUser'

export interface BookmarksContainerRenderProps {
  hasBookmark: boolean
  fetching: boolean
  onClick(e: React.MouseEvent): Promise<void>
}

interface BookmarksContainerProps {
  initialBookmark?: boolean
  type: MutateBookmark['type']
  target: MutateBookmark['target']
  children: (options: BookmarksContainerRenderProps) => JSX.Element
}

const BookmarksContainer: FC<BookmarksContainerProps> = ({ children, initialBookmark, type, target }) => {
  const { toggleBookmark, fetching, hasBookmark } = useBookmarksUser(initialBookmark, {
    type,
    target
  })

  return children({ hasBookmark, onClick: toggleBookmark, fetching })
}

export default BookmarksContainer
