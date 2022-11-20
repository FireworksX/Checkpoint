import { FC } from 'react'
import * as Styled from './styles'
import { InputProps } from 'src/components/Input/Input'
import Button from '../../components/Button/Button'

interface ProfileFields {
  mail: string
  username: InputProps
  firstName: InputProps
  lastName: InputProps
  bio: Omit<InputProps, 'textarea'>
}

interface ProfileInfoFieldsProps {
  fields: ProfileFields
  avatarText: string
  className?: string
}

const ProfileInfoFields: FC<ProfileInfoFieldsProps> = ({ className, fields, avatarText }) => {
  return (
    <Styled.Root className={className}>
      <Styled.AvatarWrapper>
        <Styled.AvatarComponent uniqueId={fields.mail}>{avatarText}</Styled.AvatarComponent>
        <Button mode='tertiary' stretched size='l'>
          Set new avatar
        </Button>
      </Styled.AvatarWrapper>

      <Styled.Field label='Username' placeholder='@mikedeal' {...fields.username} />
      <Styled.Field label='First name' placeholder='Mike' {...fields.firstName} />
      <Styled.Field label='Last name' placeholder='Deal' {...fields.lastName} />
      <Styled.Field label='Bio' textarea {...fields.bio} />
    </Styled.Root>
  )
}

export default ProfileInfoFields
