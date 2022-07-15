import {useToggle} from "react-use";
import { useMutation } from '../useMutation'
import { apiEndpoints } from '../../data/apiEndpoints'
import { useCallback } from 'react'
import { Like, MutateLike } from '../../interfaces/Likes'

export const useLikesUser = (initialValue = false, targetOptions: MutateLike) => {
  const [hasLike, toggleHasLike] = useToggle(initialValue)

  const { execute: addLike, fetching: addFetching } = useMutation<Like, MutateLike>(apiEndpoints.LIKES_ADD)

  const { execute: removeLike, fetching: removeFetching } = useMutation<Like, MutateLike>(apiEndpoints.LIKES_REMOVE)

  const toggleLike = useCallback(async () => {
    let result

    if (hasLike) {
      result = await removeLike(targetOptions)
    } else {
      result = await addLike(targetOptions)
    }

    if (result.success) {
      toggleHasLike()
    }
  }, [addLike, removeLike, hasLike, targetOptions, toggleHasLike])

  return {
    fetching: addFetching || removeFetching,
    hasLike,
    toggleLike
  }
}
