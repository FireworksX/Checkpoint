import { apiEndpoints } from 'src/data/apiEndpoints'
import { useForm } from 'src/hooks/useForm'
import { useMutation } from 'src/hooks/useMutation'
import { Category } from 'src/interfaces/Category'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'
import { CreateCategoryModalContext } from '../CreateCategoryModal'
import { validationRules } from 'src/data/validationRules'

type InputCategory = Pick<Category, 'name' | 'description'>

export const useCreateCategory = () => {
  const { close, context } = useModal<CreateCategoryModalContext>(MODAL_NAMES.createCategory)
  const { register, handleSubmit } = useForm()
  const { execute, mutate, fetching } = useMutation<Category, InputCategory>(apiEndpoints.CATEGORIES_CREATE)

  const onSubmit = handleSubmit(async data => {
    const { success, data: createdCategory } = await execute({ name: data.name, description: data.description })

    if (success) {
      await mutate(apiEndpoints.CURRENT_USER)
      await close()

      if (context?.onCreate) {
        context?.onCreate(createdCategory)
      }
    }
  })

  return {
    name: register('name', {
      maxLength: validationRules.maxLength(30),
      minLength: validationRules.minLength(3),
      required: validationRules.required()
    }),
    description: register('description', {
      maxLength: validationRules.maxLength(30)
    }),
    fetching,
    onSubmit,
    onClose: context?.onClose
  }
}
