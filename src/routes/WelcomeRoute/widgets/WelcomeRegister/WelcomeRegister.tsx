import { FC, useEffect } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import Button from 'src/components/Button/Button'
import { useWelcomeRegister } from './hooks/useWelcomeRegister'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import InitialsAvatar from '../../../../widgets/Avatar/components/InitialsAvatar/InitialsAvatar'
import { useInitialAvatarPlaceholder } from '../../../../widgets/Avatar/hooks/useInitialAvatarPlaceholder'
import Avatar from '../../../../widgets/Avatar/Avatar'
import { AvatarComponent, AvatarWrapper } from './styles'

interface WelcomeRegisterProps {
  className?: string
  phone?: string
  phoneCode?: string
  onBack(): void
  onRegister(): void
}

const WelcomeRegister: FC<WelcomeRegisterProps> = ({ className, onRegister, onBack }) => {
  const { fields, getValues, onSubmit } = useWelcomeRegister({ onRegister })

  const avatarText = useInitialAvatarPlaceholder({
    username: getValues('username'),
    firstName: getValues('firstName'),
    lastName: getValues('lastName')
  })

  return (
    <Styled.Root className={className}>
      <form onSubmit={onSubmit}>
        <Container>
          <Styled.Header
            left={<PageHeaderButton onClick={onBack}>Back</PageHeaderButton>}
            right={
              <PageHeaderButton tagName='button' type='submit'>
                Finish
              </PageHeaderButton>
            }
          />

          <Styled.AvatarWrapper>
            <Styled.AvatarComponent uniqueId={fields.phone}>{avatarText}</Styled.AvatarComponent>
          </Styled.AvatarWrapper>

          <Styled.Field placeholder='Username' {...fields.username} />
          <Styled.Field placeholder='First name' {...fields.firstName} />
          <Styled.Field placeholder='Last name' {...fields.lastName} />
          <Styled.Field placeholder='Bio' textarea {...fields.bio} />
        </Container>
      </form>
    </Styled.Root>
  )
}

export default WelcomeRegister
