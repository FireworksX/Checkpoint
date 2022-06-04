import { useMemo, useState } from 'react'
import { useForm } from 'src/hooks/useForm'
import { useRegisterUser } from 'src/hooks/data/useRegisterUser'
import { useUserIsRegister } from 'src/hooks/data/useUserIsRegister'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'

interface Props {
  onRegister(): void
}

export const useWelcomeRegister = ({ onRegister }: Props) => {
  const { register, handleSubmit } = useForm()
  const { execute } = useRegisterUser()

  const { user } = useCurrentUser()
  const [proxyUsername, setProxyUsername] = useState('')
  const { data: isRegisterUser, fetching } = useUserIsRegister({
    username: proxyUsername
  })

  const usernameFieldOptions = useMemo(() => {
    if (proxyUsername.length > 3) {
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
  }, [isRegisterUser, fetching])

  const onSubmit = handleSubmit(async data => {
    if (usernameFieldOptions?.status === 'error') {
      return
    }

    const response = await execute({
      phone: user?.phone,
      ...data
    })

    if (response.success) {
      onRegister()
    }
  })

  return {
    fields: {
      username: {
        ...register('username', {
          maxLength: 30,
          onChange: ({ target: { value } }) => setProxyUsername(value)
        }),
        ...usernameFieldOptions
      },
      firstName: register('firstName', { maxLength: 30 }),
      lastName: register('lastName', { maxLength: 30 }),
      bio: register('bio', { maxLength: 200 })
    },
    onSubmit
  }
}
