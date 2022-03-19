import { useCallback } from 'react'
import { useForm as useFormParent } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import { FieldValues } from 'react-hook-form/dist/types'
import { FieldPath } from 'react-hook-form/dist/types/path'

export const useForm = <T extends FieldValues = FieldValues>() => {
  const { register: parentRegister, handleSubmit, formState, setValue } = useFormParent<T>()
  const { errors, dirtyFields, isSubmitted } = formState

  const register = useCallback(
    (fieldName: FieldPath<T>, options?: RegisterOptions) => {
      return {
        ...parentRegister(fieldName, options),
        error: fieldName in errors,
        success: fieldName in dirtyFields && dirtyFields[fieldName] && errors[fieldName] === undefined && isSubmitted
      }
    },
    [parentRegister, errors, dirtyFields, isSubmitted]
  )

  return {
    setValue,
    register,
    handleSubmit
  }
}
