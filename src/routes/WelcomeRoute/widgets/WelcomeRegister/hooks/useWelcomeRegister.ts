import { useRegisterUser } from 'src/hooks/data/useRegisterUser'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'
import { useProfileInfoFields, UserFields } from 'src/widgets/ProfileInfoFields/hooks/useProfileInfoFields'
import {useRegisterUserMutation} from "../queries/RegisterUserMutation";
import {userTokens} from "../../../../../utils/userTokens";
import {useRef} from "react";
import {PageRef} from "../../../../../widgets/Page/Page";

interface Props {
  email: string
  onRegister(): void
}

export const useWelcomeRegister = ({ email, onRegister }: Props) => {
  const pageRef = useRef<PageRef>()
  const [{fetching}, registerUser] = useRegisterUserMutation()

  const onSubmit = async (data: UserFields) => {
    const token = userTokens().getTokens().accessToken

    if (token) {
      const {data: response} = await registerUser({
        email,
        token,
        ...data
      })

      if (response) {
        await pageRef.current?.fetchingSuccess()
        onRegister()
      } else {
        pageRef.current?.fetchingError()
      }
    }

  }

  const { fields, getValues, avatarText, onSubmitForm } = useProfileInfoFields(email, onSubmit)

  return {
    fields: {
      ...fields,
      email: email
    },
    pageRef,
    avatarText,
    getValues,
    onSubmitForm,
    fetching
  }
}
