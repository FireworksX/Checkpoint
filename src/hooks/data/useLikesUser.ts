import {useCallback, useEffect, useState} from 'react'
import { useMutation } from '../useMutation'
import { apiEndpoints } from '../../data/apiEndpoints'
import { Like, MutateLike } from '../../interfaces/Likes'

export const useLikesUser = (initialValue = false, targetOptions: MutateLike) => {
  const [hasLike, setHasLike] = useState(initialValue)

  useEffect(() => {
    setHasLike(initialValue)
  }, [initialValue])

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
      setHasLike(val => !val)
    }
  }, [addLike, removeLike, hasLike, targetOptions, setHasLike])

  return {
    fetching: addFetching || removeFetching,
    hasLike,
    toggleLike
  }
}
