import { apiEndpoints } from 'src/data/apiEndpoints'
import { useForm } from 'src/hooks/useForm'
import { useMutation } from 'src/hooks/useMutation'
import { Category } from 'src/interfaces/Category'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'

type InputCategory = Pick<Category, 'name' | 'description'>

export const useCreateCategory = () => {
  const { close } = useModal(MODAL_NAMES.createCategory)
  const { register, handleSubmit } = useForm()
  const { execute, mutate } = useMutation<Category, InputCategory>(apiEndpoints.CATEGORIES_CREATE)

  const onSubmit = handleSubmit(async data => {
    const { success } = await execute({ name: data.name, description: data.description })

    if (success) {
      await mutate(apiEndpoints.CURRENT_USER)

      close()
    }
  })

  return {
    name: register('name', { maxLength: 30, minLength: 3, required: true }),
    description: register('description', { maxLength: 30 }),
    onSubmit
  }
}
