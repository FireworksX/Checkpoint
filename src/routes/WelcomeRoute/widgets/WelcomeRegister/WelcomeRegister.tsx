import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import Button from 'src/components/Button/Button'
import { useWelcomeRegister } from './hooks/useWelcomeRegister'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'

interface WelcomeRegisterProps {
  className?: string
  phone?: string
  phoneCode?: string
  onBack(): void
  onRegister(): void
}

const WelcomeRegister: FC<WelcomeRegisterProps> = ({ className, phone, phoneCode, onRegister, onBack }) => {
  const { fields, onSubmit } = useWelcomeRegister({ onRegister })

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

          <Styled.Avatar src='https://avatars.githubusercontent.com/u/22668125?v=4' />
          <Button size='l' mode='tertiary' stretched>
            Set new avatar
          </Button>

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
