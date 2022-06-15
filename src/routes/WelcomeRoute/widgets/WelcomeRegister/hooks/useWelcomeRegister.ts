import { useMemo, useState } from 'react'
import { useForm } from 'src/hooks/useForm'
import { useRegisterUser } from 'src/hooks/data/useRegisterUser'
import { useUserIsRegister } from 'src/hooks/data/useUserIsRegister'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { useForceUpdate } from 'src/hooks/useForceUpdate'
import { useProfileInfoFields, UserFields } from '../../../../../widgets/ProfileInfoFields/hooks/useProfileInfoFields'

interface Props {
  onRegister(): void
}

export const useWelcomeRegister = ({ onRegister }: Props) => {
  const { user } = useCurrentUser()
  const { execute } = useRegisterUser()

  const onSubmit = async (data: UserFields) => {
    const response = await execute({
      phone: user?.phone,
      ...data
    })

    if (response.success) {
      onRegister()
    }
  }

  const { fields, getValues, avatarText, onSubmitForm } = useProfileInfoFields(onSubmit)

  return {
    fields: {
      ...fields,
      phone: user?.phone || ''
    },
    avatarText,
    getValues,
    onSubmitForm
  }
}
