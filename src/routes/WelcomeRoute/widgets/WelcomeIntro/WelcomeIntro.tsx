import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import { useWelcomeIntro } from './hooks/useWelcomeIntro'
import Button from 'src/components/Button/Button'
import { staticImagesMap } from '../../../../data/staticImagesMap'
import { useToggle } from 'react-use'

interface WelcomeRegisterProps {
  className?: string
  email?: string
  onNext(email: string): void
}

const WelcomeIntro: FC<WelcomeRegisterProps> = ({ className, email, onNext }) => {
  const { emailInput, fetching, onSubmit } = useWelcomeIntro({ email, onNext })

  return (
    <Styled.Root className={className}>
      <Container>
        <Styled.CoverWrapper>
          <Styled.Cover src={staticImagesMap.signUpLogin} />
        </Styled.CoverWrapper>
        <Styled.MailSection onSubmit={onSubmit}>
          <Styled.MailNumber label='Email' placeholder='brainchelsey@gmail.com' {...emailInput} type='email' />
        </Styled.MailSection>
      </Container>
      <Styled.ButtonWrapper>
        <Button size='xl' stretched loading={fetching} onClick={onSubmit}>
          Continue
        </Button>
      </Styled.ButtonWrapper>
    </Styled.Root>
  )
}

export default WelcomeIntro
