import { useMemo, useState } from 'react'
import { useForm } from 'src/hooks/useForm'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { useUserIsRegister } from 'src/hooks/data/useUserIsRegister'
import { useInitialAvatarPlaceholder } from 'src/widgets/Avatar/hooks/useInitialAvatarPlaceholder'
import { validationRules } from 'src/data/validationRules'

export interface UserFields {
  username: string
  firstName?: string
  lastName?: string
  bio?: string
}

type OnSubmit = (fields: UserFields) => any

export const useProfileInfoFields = (email: string, onSubmit: OnSubmit) => {
  const { register, handleSubmit, getValues, setValue, errors, isSubmitted } = useForm<UserFields>()

  const { user } = useCurrentUser()
  const [proxyUsername, setProxyUsername] = useState('')
  const { data: isRegisterUser } = useUserIsRegister({
    username: proxyUsername
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
        if (isRegisterUser?.data) {
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
  }, [isRegisterUser, proxyUsername.length, errors, isSubmitted])

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
