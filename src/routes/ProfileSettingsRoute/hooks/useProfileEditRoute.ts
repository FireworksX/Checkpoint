import { useProfileInfoFields, UserFields } from 'src/widgets/ProfileInfoFields/hooks/useProfileInfoFields'
import { useIsomorphicEffect } from 'src/hooks/useIsomorphicEffect'
import { useCallback, useEffect } from 'react'
import { filterObjectBy } from 'src/utils/filterBy'
import { isValue } from 'src/utils/isValue'
import { useCurrentUser } from '../../../hooks/data/useCurrentUser/useCurrentUser'
import {useLinkConfig} from "../../../widgets/Link/hooks/useLinkConfig";
import {useRouter} from "../../../hooks/useRouter";
import {useToggle} from "react-use";

export const useProfileEditRoute = () => {
  const {backSafe} = useRouter()
  const { user, logout, update } = useCurrentUser()
  const profileLink = useLinkConfig('profile')
  const [updating, toggleUpdating] = useToggle(false)

  const onSubmit = useCallback(async (data: UserFields) => {
    toggleUpdating()
    await update()
    toggleUpdating()
    backSafe(profileLink.link.name, profileLink.link.params)
    // await update(filterData)
  }, [backSafe, update, profileLink, toggleUpdating])

  const { fields, getValues, avatarText, setValue, onSubmitForm } = useProfileInfoFields(onSubmit)

  useEffect(() => {
    user?.userName && setValue('userName', user?.userName)
    user?.firstName && setValue('firstName', user?.firstName)
    user?.lastName && setValue('lastName', user?.lastName)
    user?.email && setValue('email', user?.email)
    // user?.bio && setValue('bio', user?.bio)
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
