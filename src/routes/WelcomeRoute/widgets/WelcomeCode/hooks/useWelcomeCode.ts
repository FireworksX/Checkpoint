import { useCallback, useEffect, useRef } from 'react'
import { useNumberFormatter } from 'src/components/Input/hooks/useNumberFormatter'
import { useCheckAuthCodeMutation } from '../queries/CheckAuthCodeMutation'
import { userTokens } from 'src/utils/userTokens'
import { PageRef } from 'src/widgets/Page/Page'

interface Props {
  email?: string
  onRegister(): void
  onLogin(): void
}

export const useWelcomeCode = ({ email, onRegister, onLogin }: Props) => {
  const userTokensManager = userTokens()
  const pageRef = useRef<PageRef>()

  const { formatValue, setValue } = useNumberFormatter()

  const [{ fetching }, checkCode] = useCheckAuthCodeMutation()

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
    if (formatValue.length === 4) {
      handleCheckCode()
    }
  }, [formatValue, handleCheckCode])

  return {
    codeValue: formatValue,
    onSetCodeValue: setValue,
    fetching,
    pageRef
  }
}
