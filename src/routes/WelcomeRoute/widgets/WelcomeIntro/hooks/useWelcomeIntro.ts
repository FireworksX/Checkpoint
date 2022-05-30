import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { usePhoneValidationCodeCreate } from 'src/hooks/data/usePhoneValidationCodeCreate'
import { usePhoneFormatter } from 'src/components/Input/hooks/usePhoneFormatter'
import { authUserAtom } from 'src/store/userStore/atoms/authUserAtom'
import isBrowser from 'src/utils/isBrowser'
import { serviceContainer } from '../../../../../services/ioc/serviceContainer'

interface Props {
  onBack(): void
  onNext(): void
}

export const useWelcomeIntro = ({ onNext, onBack }: Props) => {
  const [authUser, setAuthUser] = useRecoilState(authUserAtom)
  const { formatValue, value, setValue } = usePhoneFormatter(authUser?.phone)
  const { execute } = usePhoneValidationCodeCreate()

  const onSubmit = useCallback(async () => {
    const phone = `7${value}`
    const { success, data } = await execute({ phone })

    if (success) {
      setAuthUser(user => ({ ...user, phone }))
      onNext()
    }
  }, [execute, formatValue])

  return {
    phoneValue: formatValue,
    onSetPhoneValue: setValue,
    onSubmit
  }
}
