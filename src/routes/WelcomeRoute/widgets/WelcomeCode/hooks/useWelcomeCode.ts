import { useCallback, useEffect, useRef } from 'react'
import { useNumberFormatter } from 'src/components/Input/hooks/useNumberFormatter'
import { usePhoneValidationCodeCheck } from 'src/hooks/data/usePhoneValidationCodeCheck'
import { useUserIsRegister } from 'src/hooks/data/useUserIsRegister'
import { useLoginUser } from 'src/hooks/data/useLoginUser'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { generatePhoneCode } from 'src/utils/generatePhoneCode'
import { usePhoneFormatter } from 'src/components/Input/hooks/usePhoneFormatter'
import { buildPhone } from 'src/utils/buildPhone'

interface Props {
  onBack(): void
  onRegister(): void
  onLogin(): void
}

export const useWelcomeCode = ({ onRegister, onLogin }: Props) => {
  const tryLogin = useRef(false)
  const { user } = useCurrentUser()
  const { formatValue, setValue } = useNumberFormatter()
  const userPhone = user?.phone || ''
  const userCountry = user?.country || 'ru'
  const fullNumber = buildPhone(userPhone, userCountry)
  const formattedPhone = usePhoneFormatter(userPhone, userCountry)

  const { data: validationData } = usePhoneValidationCodeCheck({
    phone: userPhone,
    code: formatValue,
    country: userCountry
  })
  const { data: isRegisterData, fetching } = useUserIsRegister(
    {
      phone: userPhone,
      country: userCountry
    },
    !validationData?.data
  )

  const { execute } = useLoginUser()

  const onLoginUser = useCallback(async () => {
    tryLogin.current = true

    const { success } = await execute({
      phone: userPhone,
      code: formatValue,
      country: userCountry
    })

    if (success) {
      onLogin()
    } else {
      alert('Error')
    }
  }, [formatValue, userCountry, execute, onLogin, userPhone])

  useEffect(() => {
    if (validationData?.success && validationData?.data && !fetching) {
      if (isRegisterData?.success && isRegisterData?.data) {
        onLoginUser()
      } else {
        onRegister()
      }
    }
  }, [validationData, fetching, isRegisterData, onLoginUser, onRegister])

  const generatedCode = generatePhoneCode(fullNumber)

  return {
    generatedCode,
    phone: formattedPhone.formatValue,
    codeValue: formatValue,
    onSetCodeValue: setValue
  }
}
