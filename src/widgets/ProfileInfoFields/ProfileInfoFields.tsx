import {FC, ReactNode, useEffect, useMemo} from 'react'
import * as Styled from './styles'
import { InputProps } from 'src/components/Input/Input'
import Button from '../../components/Button/Button'
import { useFileSelector } from '../../hooks/useFileSelector'
import {ResetAvatar} from "./styles";
import Icon from "../../components/Icon/Icon";

interface ProfileFields {
  mail: string
  username: InputProps
  firstName: InputProps
  lastName: InputProps
  bio: Omit<InputProps, 'textarea'>
}

interface ProfileInfoFieldsProps {
  fields: ProfileFields
  formChildren?: ReactNode
  avatarText: string
  avatar?: string
  className?: string
  onSelectAvatar: (avatar: File) => void
  onSubmit: (e?: any) => void
}

const ProfileInfoFields: FC<ProfileInfoFieldsProps> = ({
  className,
  fields,
    formChildren,
  avatar,
  avatarText,
  onSubmit,
  onSelectAvatar
}) => {
  const { Selector, select, readFiles, files, reset } = useFileSelector({ multiple: false })

  useEffect(() => {
    if (files) {
      onSelectAvatar(files[0])
    }
  }, [files, onSelectAvatar])

  const avatarSrc = useMemo(() => avatar || readFiles[0], [avatar, readFiles])

  return (
    <Styled.Root className={className}>
      {Selector}
      <Styled.AvatarWrapper>
        <Styled.AvatarComponent src={avatarSrc} uniqueId={fields.mail} onReset={reset}>
          {avatarText}
        </Styled.AvatarComponent>
        <Button mode='tertiary' stretched size='l' onClick={select}>
          Set new avatar
        </Button>
      </Styled.AvatarWrapper>

      <form onSubmit={onSubmit}>
        <Styled.Field label='Username' placeholder='mikedeal' {...fields.username} />
        <Styled.Field label='First name' placeholder='Mike' {...fields.firstName} />
        <Styled.Field label='Last name' placeholder='Deal' {...fields.lastName} />
        {/*<Styled.Field label='Bio' textarea {...fields.bio} />*/}
        {formChildren}
      </form>
    </Styled.Root>
  )
}

export default ProfileInfoFields
