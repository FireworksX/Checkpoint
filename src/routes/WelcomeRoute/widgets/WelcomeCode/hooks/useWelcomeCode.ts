import { useCallback, useEffect, useRef } from 'react'
import { useNumberFormatter } from 'src/components/Input/hooks/useNumberFormatter'
import { useUserIsRegister } from 'src/hooks/data/useUserIsRegister'
import { useLoginUser } from 'src/hooks/data/useLoginUser'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { useMailValidationCodeCheck } from 'src/hooks/data/useMailValidationCodeCheck'

interface Props {
  onBack(): void
  onRegister(): void
  onLogin(): void
}

export const useWelcomeCode = ({ onRegister, onLogin }: Props) => {
  const tryLogin = useRef(false)
  const { user } = useCurrentUser()
  const { formatValue, setValue } = useNumberFormatter()
  const userMail = user?.mail || ''

  const { data: validationData } = useMailValidationCodeCheck({
    mail: userMail,
    code: formatValue
  })
  const { data: isRegisterData, fetching } = useUserIsRegister(
    {
      mail: userMail
    },
    !validationData?.data
  )

  const { execute } = useLoginUser()

  const onLoginUser = useCallback(async () => {
    if (tryLogin.current) {
      return
    }

    tryLogin.current = true

    const { success } = await execute({
      mail: userMail,
      code: formatValue
    })

    if (success) {
      onLogin()
    } else {
      alert('Error')
    }
  }, [formatValue, userMail, execute, onLogin])

  useEffect(() => {
    if (validationData?.success && validationData?.data && !fetching) {
      if (isRegisterData?.success && isRegisterData?.data) {
        onLoginUser()
      } else {
        onRegister()
      }
    }
  }, [validationData, fetching, isRegisterData, onLoginUser, onRegister])

  return {
    mail: userMail,
    codeValue: formatValue,
    onSetCodeValue: setValue
  }
}
