import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import { useWelcomeRegister } from './hooks/useWelcomeRegister'
import ProfileInfoFields from 'src/widgets/ProfileInfoFields/ProfileInfoFields'
import Button from '../../../../components/Button/Button'

interface WelcomeRegisterProps {
  className?: string
  email: string
  onBack(): void
  onRegister(): void
}

const WelcomeRegister: FC<WelcomeRegisterProps> = ({ className, email, onRegister }) => {
  const { fields, avatarText, pageRef, fetching, onSelectAvatar, onSubmitForm } = useWelcomeRegister({
    email,
    onRegister
  })

  return (
    <Styled.Root className={className} ref={pageRef} fetching={fetching}>
      <Container>
        <ProfileInfoFields
          fields={fields}
          avatarText={avatarText}
          formChildren={
            <Button stretched size='xl'>
              Register
            </Button>
          }
          onSelectAvatar={onSelectAvatar}
          onSubmit={onSubmitForm}
        />
      </Container>
    </Styled.Root>
  )
}

export default WelcomeRegister
