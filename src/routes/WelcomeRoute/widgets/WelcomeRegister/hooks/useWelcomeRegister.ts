import { useRegisterUser } from 'src/hooks/data/useRegisterUser'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { useProfileInfoFields, UserFields } from 'src/widgets/ProfileInfoFields/hooks/useProfileInfoFields'
import { useRegisterUserMutation } from '../queries/RegisterUserMutation'
import { userTokens } from '../../../../../utils/userTokens'
import { useCallback, useRef, useState } from 'react'
import { PageRef } from '../../../../../widgets/Page/Page'
import { useUploadFile } from '../../../../../hooks/data/useUploadFile'
import { useToggle } from 'react-use'
import {useIsomorphicEffect} from "../../../../../hooks/useIsomorphicEffect";

interface Props {
  email: string
  onRegister(): void
}

export const useWelcomeRegister = ({ email, onRegister }: Props) => {
  const pageRef = useRef<PageRef>()
  const [{ fetching }, registerUser] = useRegisterUserMutation()
  const [avatarFile, setAvatarFile] = useState<File | undefined>(undefined)
  const { fetching: uploadingAvatar, runHandler } = useUploadFile(avatarFile ? [avatarFile] : undefined, {
    pause: true
  })

  const onSubmit = async (data: UserFields) => {
    const token = userTokens().getTokens().accessToken

    if (token) {
      const { data: response } = await registerUser({
        token,
        ...data
      })

      await runHandler()

      if (response) {
        await pageRef.current?.fetchingSuccess()
        onRegister()
      } else {
        pageRef.current?.fetchingError()
      }
    }
  }

  const { fields, getValues, avatarText, setValue, onSubmitForm } = useProfileInfoFields(onSubmit)

  useIsomorphicEffect(() => {
    setValue('email', email)
  }, [email])

  return {
    fields,
    pageRef,
    avatarText,
    getValues,
    onSubmitForm,
    onSelectAvatar: setAvatarFile,
    fetching: fetching || uploadingAvatar
  }
}
