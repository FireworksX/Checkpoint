import { useCallback, useEffect, useRef, useState } from 'react'
import { useNumberFormatter } from 'src/components/Input/hooks/useNumberFormatter'
import { useCheckAuthCodeMutation } from '../queries/CheckAuthCodeMutation'
import { userTokens } from 'src/utils/userTokens'
import { PageRef } from 'src/widgets/Page/Page'
import { useInterval } from 'react-use'
import { useSendAuthCodeMutation } from 'src/routes/WelcomeRoute/widgets/WelcomeIntro/queries/SendAuthCodeMutation'

interface Props {
  email?: string
  onRegister(): void
  onLogin(): void
}

const RESEND_INTERVAL = 60

export const useWelcomeCode = ({ email, onRegister, onLogin }: Props) => {
  const [resendValue, setResendValue] = useState(RESEND_INTERVAL)

  const userTokensManager = userTokens()
  const pageRef = useRef<PageRef>()

  const { formatValue, setValue } = useNumberFormatter()

  const [{ fetching }, checkCode] = useCheckAuthCodeMutation()
  const [, sendAuthCode] = useSendAuthCodeMutation()

  const handleCheckCode = useCallback(async () => {
    if (email) {
      const { data: response, error } = await checkCode({
        email,
        code: formatValue
      })

      if (response?.checkCode?.token) {
        userTokensManager.setTokens({ accessToken: response?.checkCode?.token })
        await pageRef.current?.fetchingSuccess()
      }

      if (response?.checkCode?.status === 1) {
        onRegister()
      } else if (response?.checkCode?.status === 2) {
        onLogin()
      }

      if (error && pageRef.current) {
        pageRef.current?.fetchingError()
      }
    }
  }, [checkCode, formatValue, email, onLogin, onRegister, userTokensManager])

  useEffect(() => {
    if (formatValue.length === 4 && !fetching) {
      handleCheckCode()
    }
  }, [formatValue])

  useInterval(
    () => {
      setResendValue(val => val - 1)
    },
    resendValue > 0 ? 1000 : null
  )

  const resendCode = useCallback(async () => {
    if (email) {
      await sendAuthCode({ email })
      setResendValue(RESEND_INTERVAL)
    }
  }, [setResendValue, sendAuthCode, email])

  return {
    codeValue: formatValue,
    onSetCodeValue: setValue,
    fetching,
    pageRef,
    resendValue,
    resendCode
  }
}
