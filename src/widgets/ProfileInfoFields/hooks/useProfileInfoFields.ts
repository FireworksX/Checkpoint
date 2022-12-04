import { useMemo, useState } from 'react'
import { useForm } from 'src/hooks/useForm'
import { useInitialAvatarPlaceholder } from 'src/widgets/Avatar/hooks/useInitialAvatarPlaceholder'
import { validationRules } from 'src/data/validationRules'
import {useUsernameExistsQuery} from "../queries/UsernameExistsQuery";

export interface UserFields {
  username: string
  firstName?: string
  lastName?: string
  bio?: string
}

type OnSubmit = (fields: UserFields) => any

export const useProfileInfoFields = (email: string, onSubmit: OnSubmit) => {
  const { register, handleSubmit, getValues, setValue, errors, isSubmitted } = useForm<UserFields>()

  const [proxyUsername, setProxyUsername] = useState('')
  const [{data: userExist}] = useUsernameExistsQuery({
    variables: {
      username: proxyUsername
    }
  })

  const usernameFieldOptions = useMemo(() => {
    if (isSubmitted) {
      if (proxyUsername.length > 3) {
        if ('username' in errors) {
          return {
            status: 'error' as const,
            statusText: errors.username?.message
          }
        }
        if (userExist?.usernameExists) {
          return {
            status: 'error' as const,
            statusText: 'This username already exists.'
          }
        } else {
          return {
            status: 'success' as const
          }
        }
      }
    }
  }, [userExist, proxyUsername.length, errors, isSubmitted])

  const onSubmitForm = handleSubmit(async data => {
    if (usernameFieldOptions?.status === 'error') {
      return
    }

    onSubmit(data)
  })

  const avatarText = useInitialAvatarPlaceholder({
    username: getValues('username'),
    firstName: getValues('firstName'),
    lastName: getValues('lastName')
  })

  return {
    fields: {
      username: {
        ...register('username', {
          maxLength: validationRules.maxLength(30),
          minLength: validationRules.minLength(3),
          required: validationRules.required(),
          onChange: ({ target: { value } }) => setProxyUsername(value)
        }),
        ...usernameFieldOptions
      },
      firstName: register('firstName', { maxLength: validationRules.maxLength(30) }),
      lastName: register('lastName', { maxLength: validationRules.maxLength(30) }),
      // bio: register('bio', { maxLength: validationRules.maxLength(200) }),
      email
    },
    setValue,
    getValues,
    onSubmitForm,
    avatarText
  }
}
