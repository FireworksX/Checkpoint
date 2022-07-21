import { useCallback, useEffect, useState } from 'react'
import { useMutation } from '../useMutation'
import { apiEndpoints } from '../../data/apiEndpoints'
import {AddBookmark, Bookmark, RemoveBookmark} from '../../interfaces/Bookmark'
import { useModal } from '../useModal'
import { MODAL_NAMES } from '../../router/constants'
import { ChooseCategoryModalContext } from '../../modals/ChooseCategoryModal/ChooseCategoryModal'
import { useCurrentUser } from './useCurrentUser'

export const useBookmarksUser = (initialValue = false, targetOptions: Omit<AddBookmark, 'category'>) => {
  const [hasBookmark, setHasBookmark] = useState(initialValue)
  const { open, close } = useModal<ChooseCategoryModalContext>(MODAL_NAMES.chooseCategory)
  const { user } = useCurrentUser()

  useEffect(() => {
    setHasBookmark(initialValue)
  }, [initialValue])

  const { execute: addBookmark, fetching: addFetching } = useMutation<Bookmark, AddBookmark>(
    apiEndpoints.BOOKMARKS_ADD
  )

  const { execute: removeBookmark, fetching: removeFetching } = useMutation<Bookmark, RemoveBookmark>(
    apiEndpoints.BOOKMARKS_REMOVE
  )

  const toggleBookmark = useCallback(
    async (category?: AddBookmark['category']) => {
      let result

      if (hasBookmark) {
        result = await removeBookmark(targetOptions)
      } else {
        result = await addBookmark({
          ...targetOptions,
          category: category || ''
        })
      }

      if (result.success) {
        setHasBookmark(val => !val)
      }
    },
    [addBookmark, removeBookmark, hasBookmark, targetOptions, setHasBookmark]
  )

  const proxyToggleBookmark = useCallback(() => {
    if (!hasBookmark) {
      open({
        list: user?.categories || [],
        async onSelect({ _id }) {
          await close()
          toggleBookmark(_id)
        }
      })
    } else {
      toggleBookmark()
    }
  }, [open, toggleBookmark, user, hasBookmark])

  return {
    fetching: addFetching || removeFetching,
    hasBookmark,
    toggleBookmark: proxyToggleBookmark
  }
}
