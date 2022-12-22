import { useMemo, useState } from 'react'
import { useForm } from 'src/hooks/useForm'
import { useInitialAvatarPlaceholder } from 'src/widgets/Avatar/hooks/useInitialAvatarPlaceholder'
import { validationRules } from 'src/data/validationRules'
import {useUsernameExistsQuery} from "../queries/UsernameExistsQuery";

export interface UserFields {
  email: string
  userName: string
  firstName?: string
  lastName?: string
  bio?: string
}

type OnSubmit = (fields: UserFields) => any

export const useProfileInfoFields = (onSubmit: OnSubmit) => {
  const { register, handleSubmit, getValues, setValue, errors, isSubmitted } = useForm<UserFields>()

  const [proxyUserName, setProxyUserName] = useState('')
  const [{data: userExist}] = useUsernameExistsQuery({
    variables: {
      userName: proxyUserName
    }
  })

  const userNameFieldOptions = useMemo(() => {
    if (isSubmitted) {
      if (proxyUserName.length > 3) {
        if ('userName' in errors) {
          return {
            status: 'error' as const,
            statusText: errors.userName?.message
          }
        }
        if (userExist?.usernameExists) {
          return {
            status: 'error' as const,
            statusText: 'This userName already exists.'
          }
        } else {
          return {
            status: 'success' as const
          }
        }
      }
    }
  }, [userExist, proxyUserName.length, errors, isSubmitted])

  const onSubmitForm = handleSubmit(async data => {
    if (userNameFieldOptions?.status === 'error') {
      return
    }

    onSubmit(data)
  })

  const avatarText = useInitialAvatarPlaceholder({
    userName: getValues('userName'),
    firstName: getValues('firstName'),
    lastName: getValues('lastName')
  })

  return {
    fields: {
      userName: {
        ...register('userName', {
          maxLength: validationRules.maxLength(30),
          minLength: validationRules.minLength(3),
          required: validationRules.required(),
          onChange: ({ target: { value } }) => setProxyUserName(value)
        }),
        ...userNameFieldOptions
      },
      firstName: register('firstName', { maxLength: validationRules.maxLength(30) }),
      lastName: register('lastName', { maxLength: validationRules.maxLength(30) }),
      email: register('email', { required: validationRules.required(), pattern: validationRules.emailPattern() }),
      bio: register('bio', { maxLength: validationRules.maxLength(200) }),
    },
    setValue,
    getValues,
    onSubmitForm,
    avatarText
  }
}
