import { useCallback } from 'react'
import { useForm as useFormParent } from 'react-hook-form'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import { FieldValues } from 'react-hook-form/dist/types'
import { FieldPath } from 'react-hook-form/dist/types/path'

export const useForm = <T extends FieldValues = FieldValues>() => {
  const { register: parentRegister, handleSubmit, formState, setValue, getValues, reset } = useFormParent<T>()

  const { errors, isSubmitted } = formState

  const register = useCallback(
    (fieldName: FieldPath<T>, options?: RegisterOptions) => {
      return {
        ...parentRegister(fieldName, options),
        status: (isSubmitted ? (errors[fieldName] === undefined ? 'success' : 'error') : undefined) as 'success',
        statusText: errors[fieldName]?.message,
        proxyValue: getValues(fieldName)
      }
    },
    [parentRegister, errors, isSubmitted, getValues]
  )

  return {
    errors,
    isSubmitted,
    reset,
    getValues,
    setValue,
    register,
    handleSubmit
  }
}
