import { useProfileInfoFields, UserFields } from 'src/widgets/ProfileInfoFields/hooks/useProfileInfoFields'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { useIsomorphicEffect } from 'src/hooks/useIsomorphicEffect'
import { useCallback } from 'react'
import { filterObjectBy } from 'src/utils/filterBy'
import { isValue } from 'src/utils/isValue'

export const useProfileEditRoute = () => {
  const { user, update } = useCurrentUser()
  const onSubmit = useCallback(
    async (data: UserFields) => {
      const filterData = filterObjectBy(
        data,
        (key, value) => isValue(value) && typeof value === 'string' && value.length > 0
      )
      await update(filterData)
    },
    [update]
  )

  const { fields, getValues, avatarText, setValue, onSubmitForm } = useProfileInfoFields(onSubmit)

  useIsomorphicEffect(() => {
    user?.username && setValue('username', user?.username)
    user?.firstName && setValue('firstName', user?.firstName)
    user?.lastName && setValue('lastName', user?.lastName)
    user?.bio && setValue('bio', user?.bio)
  }, [user])

  return {
    fields,
    avatarText,
    getValues,
    onSubmitForm
  }
}
