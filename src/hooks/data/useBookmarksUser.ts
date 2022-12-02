import { useCallback, useEffect, useState } from 'react'
import { apiEndpoints } from 'src/data/apiEndpoints'
import { AddBookmark, Bookmark, RemoveBookmark } from 'src/interfaces/Bookmark'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'
import { useCurrentUser } from './useCurrentUser'
import {ChooseProfileCategoryModalContext} from "src/modals/ChooseProfileCategoryModal/ChooseProfileCategoryModal";

export const useBookmarksUser = (initialValue = false, targetOptions: Omit<AddBookmark, 'category'>) => {
  const [hasBookmark, setHasBookmark] = useState(initialValue)
  const { open, close, updateContext } = useModal<ChooseProfileCategoryModalContext>(MODAL_NAMES.chooseProfileCategory)
  const { mutate, categories } = useCurrentUser()

  useEffect(() => {
    setHasBookmark(initialValue)
  }, [initialValue])

  const { execute: addBookmark, fetching: addFetching } = {}

  const { execute: removeBookmark, fetching: removeFetching } = {}

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
        async onSelect({ _id }) {
          await close()
          toggleBookmark(_id)
        }
      })
    } else {
      toggleBookmark()
    }
  }, [open, toggleBookmark, hasBookmark, close])

  return {
    fetching: addFetching || removeFetching,
    hasBookmark,
    toggleBookmark: proxyToggleBookmark
  }
}
