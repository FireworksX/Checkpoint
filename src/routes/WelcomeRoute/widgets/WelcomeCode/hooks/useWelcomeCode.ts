import { useCallback, useEffect, useRef } from 'react'
import { useNumberFormatter } from 'src/components/Input/hooks/useNumberFormatter'
import { usePhoneValidationCodeCheck } from 'src/hooks/data/usePhoneValidationCodeCheck'
import { useUserIsRegister } from 'src/hooks/data/useUserIsRegister'
import { useLoginUser } from 'src/hooks/data/useLoginUser'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'

interface Props {
  onBack(): void
  onRegister(): void
  onLogin(): void
}

export const useWelcomeCode = ({ onRegister, onLogin, onBack }: Props) => {
  const tryLogin = useRef(false)
  const { user } = useCurrentUser()
  const { formatValue, setValue } = useNumberFormatter()

  const { data: validationData } = usePhoneValidationCodeCheck({
    phone: user?.phone || '',
    code: formatValue
  })
  const { data: isRegisterData, fetching } = useUserIsRegister(
    {
      phone: user?.phone
    },
    !validationData?.data
  )

  const { execute } = useLoginUser()

  const onLoginUser = useCallback(async () => {
    tryLogin.current = true

    const { success } = await execute({
      phone: user?.phone || '',
      code: formatValue
    })

    if (success) {
      onLogin()
    } else {
      alert('Error')
    }
  }, [formatValue])

  useEffect(() => {
    if (validationData?.success && validationData?.data && !fetching) {
      if (isRegisterData?.success && isRegisterData?.data) {
        onLoginUser()
      } else {
        onRegister()
      }
    }
  }, [validationData, fetching, isRegisterData, onLoginUser])

  return {
    phone: user?.phone,
    codeValue: formatValue,
    onSetCodeValue: setValue
  }
}
