import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { usePhoneValidationCodeCreate } from 'src/hooks/data/usePhoneValidationCodeCreate'
import { usePhoneFormatter } from 'src/components/Input/hooks/usePhoneFormatter'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'

interface Props {
  onBack(): void
  onNext(): void
}

export const useWelcomeIntro = ({ onNext, onBack }: Props) => {
  const { user, mutate } = useCurrentUser()
  const { formatValue, value, setValue } = usePhoneFormatter(user?.phone)
  const { execute } = usePhoneValidationCodeCreate()

  const onSubmit = useCallback(async () => {
    const phone = `7${value}`
    const { success, data } = await execute({ phone })

    if (success) {
      mutate(user => ({ ...user, _id: user?._id || '', phone }))
      onNext()
    }
  }, [execute, formatValue])

  return {
    phoneValue: formatValue,
    onSetPhoneValue: setValue,
    onSubmit
  }
}
