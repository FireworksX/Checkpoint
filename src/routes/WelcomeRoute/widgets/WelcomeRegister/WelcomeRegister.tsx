import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import { useWelcomeRegister } from './hooks/useWelcomeRegister'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import ProfileInfoFields from 'src/widgets/ProfileInfoFields/ProfileInfoFields'

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
          <Styled.Header
            left={<PageHeaderButton onClick={onBack}>Назад</PageHeaderButton>}
            right={
              <PageHeaderButton tagName='button' type='submit'>
                Готово
              </PageHeaderButton>
            }
          />

          <ProfileInfoFields fields={fields} avatarText={avatarText} />
        </Container>
      </form>
    </Styled.Root>
  )
}

export default WelcomeRegister
