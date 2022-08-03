import { apiEndpoints } from 'src/data/apiEndpoints'
import { useForm } from 'src/hooks/useForm'
import { useMutation } from 'src/hooks/useMutation'
import { Category } from 'src/interfaces/Category'
import { useModal } from 'src/hooks/useModal'
import { MODAL_NAMES } from 'src/router/constants'
import { useEffect } from 'react'
import { validationRules } from '../../../data/validationRules'

type InputCategory = Pick<Category, 'name' | 'description'> & { findSlug: string }

export const useEditCategoryModal = () => {
  const { close, context } = useModal<Category>(MODAL_NAMES.editCategory)
  const { register, handleSubmit, setValue, reset } = useForm()
  const { execute, mutate } = useMutation<Category, InputCategory>(apiEndpoints.CATEGORIES_UPDATE)

  useEffect(() => {
    if (context) {
      setValue('name', context.name)
      setValue('description', context.description)
    }
  }, [context, setValue])

  const onSubmit = handleSubmit(async data => {
    const { success } = await execute({
      findSlug: context?.slug || '',
      name: data.name,
      description: data.description
    })

    if (success) {
      await mutate(apiEndpoints.CURRENT_USER)
      await close()
      reset()
    }
  })

  return {
    name: register('name', {
      maxLength: validationRules.maxLength(30),
      minLength: validationRules.minLength(3),
      required: validationRules.required()
    }),
    description: register('description', { maxLength: validationRules.maxLength(30) }),
    onSubmit
  }
}
