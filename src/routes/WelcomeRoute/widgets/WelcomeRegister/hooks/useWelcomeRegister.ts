import { useRegisterUser } from 'src/hooks/data/useRegisterUser'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { useProfileInfoFields, UserFields } from 'src/widgets/ProfileInfoFields/hooks/useProfileInfoFields'

interface Props {
  onRegister(): void
}

export const useWelcomeRegister = ({ onRegister }: Props) => {
  const { user } = useCurrentUser()
  const { execute } = useRegisterUser()

  const onSubmit = async (data: UserFields) => {
    const response = await execute({
      mail: user?.mail,
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
      mail: user?.mail || ''
    },
    avatarText,
    getValues,
    onSubmitForm
  }
}
