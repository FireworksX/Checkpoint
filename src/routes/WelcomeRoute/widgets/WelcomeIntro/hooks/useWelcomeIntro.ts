import { useCallback } from 'react'
import { usePhoneValidationCodeCreate } from 'src/hooks/data/usePhoneValidationCodeCreate'
import { usePhoneFormatter } from 'src/components/Input/hooks/usePhoneFormatter'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'

interface Props {
  onBack(): void
  onNext(): void
}

export const useWelcomeIntro = ({ onNext }: Props) => {
  const { user, mutate } = useCurrentUser()
  const { formatValue, value, setValue } = usePhoneFormatter(user?.phone)
  const { execute } = usePhoneValidationCodeCreate()


  const onSubmit = useCallback(async () => {

    const { success } = await execute({ phone: value, country: 'ru' })

    if (success) {
      mutate(user => ({ ...user, _id: user?._id || '', phone: value, country: 'ru' }))
      onNext()
    }
  }, [execute, mutate, onNext, value])

  return {
    phoneValue: formatValue,
    onSetPhoneValue: setValue,
    onSubmit
  }
}
