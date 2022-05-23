import { useCallback } from 'react'
import { useForm as useFormParent } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import { FieldValues } from 'react-hook-form/dist/types'
import { FieldPath } from 'react-hook-form/dist/types/path'

export const useForm = <T extends FieldValues = FieldValues>() => {
  const { register: parentRegister, handleSubmit, formState, setValue, getValues } = useFormParent<T>()
  const { errors, dirtyFields, isSubmitted } = formState

  const register = useCallback(
    (fieldName: FieldPath<T>, options?: RegisterOptions) => {
      const isDirty = fieldName in dirtyFields && dirtyFields[fieldName]

      return {
        ...parentRegister(fieldName, options),
        status: (isDirty || isSubmitted
          ? errors[fieldName] === undefined
            ? 'success'
            : 'error'
          : undefined) as 'success'
      }
    },
    [parentRegister, errors, dirtyFields, isSubmitted]
  )

  return {
    dirtyFields,
    getValues,
    setValue,
    register,
    handleSubmit
  }
}
