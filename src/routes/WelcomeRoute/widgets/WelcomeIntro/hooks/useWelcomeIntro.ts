import { useForm } from 'src/hooks/useForm'
import { validationRules } from 'src/data/validationRules'
import { useSendAuthCodeMutation } from '../queries/SendAuthCodeMutation'
import { useIsomorphicEffect } from 'src/hooks/useIsomorphicEffect'

interface Props {
  email?: string
  onNext(email: string): void
}

export const useWelcomeIntro = ({ email, onNext }: Props) => {
  const [{ fetching }, sendAuthCode] = useSendAuthCodeMutation()
  const { register, setValue, handleSubmit } = useForm<{ email: string }>()

  useIsomorphicEffect(() => {
    if (email) {
      setValue('email', email)
    }
  })

  const onSubmit = handleSubmit(async data => {
    const { data: response } = await sendAuthCode({ email: data.email })

    if (response?.sendAuthCode?.email) {
      onNext(response?.sendAuthCode?.email)
    }
  })

  return {
    emailInput: register('email', { required: validationRules.required(), pattern: validationRules.emailPattern() }),
    onSubmit,
    fetching
  }
}
