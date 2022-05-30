import { useCallback, useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { authUserAtom } from 'src/store/userStore/atoms/authUserAtom'
import { useNumberFormatter } from 'src/components/Input/hooks/useNumberFormatter'
import { usePhoneValidationCodeCheck } from 'src/hooks/data/usePhoneValidationCodeCheck'
import { useUserIsRegister } from 'src/hooks/data/useUserIsRegister'
import { useLoginUser } from 'src/hooks/data/useLoginUser'

interface Props {
  onBack(): void
  onRegister(): void
  onLogin(): void
}

export const useWelcomeCode = ({ onRegister, onLogin, onBack }: Props) => {
  const tryLogin = useRef(false)
  const authUser = useRecoilValue(authUserAtom)
  const { formatValue, setValue } = useNumberFormatter()
  const { data: validationData } = usePhoneValidationCodeCheck({
    phone: authUser.phone || '',
    code: formatValue
  })
  const { data: isRegisterData, fetching } = useUserIsRegister(
    {
      phone: authUser?.phone
    },
    !validationData?.data
  )

  const { execute } = useLoginUser()

  const onLoginUser = useCallback(async () => {
    tryLogin.current = true

    const { success } = await execute({
      phone: authUser?.phone || '',
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
    phone: authUser.phone,
    codeValue: formatValue,
    onSetCodeValue: setValue
  }
}
