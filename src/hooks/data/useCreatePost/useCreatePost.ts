import { useCreatePostMutation } from './CreatePostMutation'

export const useCreatePost = () => {
  const [mutationResponse, execute] = useCreatePostMutation()

  return [mutationResponse, execute]
}
