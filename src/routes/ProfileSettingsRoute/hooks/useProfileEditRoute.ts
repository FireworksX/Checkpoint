import { useProfileInfoFields, UserFields } from 'src/widgets/ProfileInfoFields/hooks/useProfileInfoFields'
import { useCallback, useEffect } from 'react'
import { useCurrentUser } from '../../../hooks/data/useCurrentUser/useCurrentUser'
import {useLinkConfig} from "../../../widgets/Link/hooks/useLinkConfig";
import {useRouter} from "../../../hooks/useRouter";
import {useToggle} from "react-use";
import {useEditUserMutation} from "../queries/EditUserMutation";
import {userTokens} from "../../../utils/userTokens";

export const useProfileEditRoute = () => {
  const {backSafe} = useRouter()
  const { user, logout, update } = useCurrentUser()
  const [profileLink] = useLinkConfig('profile')
  const [updating, toggleUpdating] = useToggle(false)
  const token = userTokens().getTokens().accessToken

  const [_, editUser] = useEditUserMutation()

  const onSubmit = useCallback(async (data: UserFields) => {
    toggleUpdating()
    await editUser({
      ...data,
      token
    })
    toggleUpdating()
    backSafe(profileLink.link.name, profileLink.link.params)

  }, [backSafe, update, profileLink, toggleUpdating, editUser])

  const { fields, getValues, avatarText, setValue, onSubmitForm } = useProfileInfoFields(onSubmit)

  useEffect(() => {
    user?.userName && setValue('userName', user?.userName)
    user?.firstName && setValue('firstName', user?.firstName)
    user?.lastName && setValue('lastName', user?.lastName)
    user?.email && setValue('email', user?.email)
    user?.bio && setValue('bio', user?.bio)
  }, [user, setValue])

  return {
    fields,
    avatarText,
    getValues,
    updating,
    onSubmitForm,
    logout
  }
}
