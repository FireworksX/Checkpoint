import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { useForm } from 'src/hooks/useForm'
import { validationRules } from 'src/data/validationRules'
import {useMailValidationCodeCreate} from "src/hooks/data/useMailValidationCodeCreate";

interface Props {
  onBack(): void
  onNext(): void
}

export const useWelcomeIntro = ({ onNext }: Props) => {
  const { mutate } = useCurrentUser()
  const { execute } = useMailValidationCodeCreate()
  const { register, handleSubmit } = useForm<{ mail: string }>()

  const onSubmit = handleSubmit(async data => {
    onNext()
    const { success } = await execute({ mail: data.mail })

    if (success) {
      mutate(user => ({ ...user, _id: user?._id || '', mail: data.mail }))
      onNext()
    }
  })

  return {
    emailInput: register('mail', { required: validationRules.required(), pattern: validationRules.emailPattern() }),
    onSubmit
  }
}
