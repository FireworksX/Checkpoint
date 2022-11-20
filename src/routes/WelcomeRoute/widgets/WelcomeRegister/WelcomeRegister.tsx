import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import { useWelcomeRegister } from './hooks/useWelcomeRegister'
import ProfileInfoFields from 'src/widgets/ProfileInfoFields/ProfileInfoFields'
import Button from "../../../../components/Button/Button";

interface WelcomeRegisterProps {
  className?: string
  phone?: string
  phoneCode?: string
  onBack(): void
  onRegister(): void
}

const WelcomeRegister: FC<WelcomeRegisterProps> = ({ className, onRegister, onBack }) => {
  const { fields, avatarText, onSubmitForm } = useWelcomeRegister({ onRegister })

  return (
    <Styled.Root className={className}>
      <form onSubmit={onSubmitForm}>
        <Container>
          <ProfileInfoFields fields={fields} avatarText={avatarText} />
          <Button stretched size='xl'>Register</Button>
        </Container>
      </form>
    </Styled.Root>
  )
}

export default WelcomeRegister
