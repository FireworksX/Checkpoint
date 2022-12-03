import { useCallback, useEffect, useRef } from 'react'
import { useNumberFormatter } from 'src/components/Input/hooks/useNumberFormatter'
import { useUserIsRegister } from 'src/hooks/data/useUserIsRegister'
import { useLoginUser } from 'src/hooks/data/useLoginUser'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { useMailValidationCodeCheck } from 'src/hooks/data/useMailValidationCodeCheck'
import { useCheckAuthCodeMutation } from '../queries/CheckAuthCodeMutation'
import { userTokens } from '../../../../../utils/userTokens'
import { PageRef } from '../../../../../widgets/Page/Page'

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
  // const { data: isRegisterData, fetching } = useUserIsRegister(
  //   {
  //     mail: userMail
  //   },
  //   !validationData?.data
  // )

  const { execute } = useLoginUser()

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
  }, [formatValue])

  // const onLoginUser = useCallback(async () => {
  //   if (tryLogin.current) {
  //     return
  //   }
  //
  //   tryLogin.current = true
  //
  //   const { success } = await execute({
  //     mail: userMail,
  //     code: formatValue
  //   })
  //
  //   if (success) {
  //     onLogin()
  //   } else {
  //     alert('Error')
  //   }
  // }, [formatValue, userMail, execute, onLogin])
  //
  // useEffect(() => {
  //   if (validationData?.success && validationData?.data && !fetching) {
  //     if (isRegisterData?.success && isRegisterData?.data) {
  //       onLoginUser()
  //     } else {
  //       onRegister()
  //     }
  //   }
  // }, [validationData, fetching, isRegisterData, onLoginUser, onRegister])

  return {
    codeValue: formatValue,
    onSetCodeValue: setValue,
    fetching,
    pageRef
  }
}
