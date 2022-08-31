import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import { useWelcomeIntro } from './hooks/useWelcomeIntro'
import Button from 'src/components/Button/Button'
import { staticImagesMap } from '../../../../data/staticImagesMap'

interface WelcomeRegisterProps {
  className?: string
  phone?: string
  onNext(): void
}

const WelcomeIntro: FC<WelcomeRegisterProps> = ({ className, onNext }) => {
  const { emailInput, onSubmit } = useWelcomeIntro({ onNext })

  return (
    <Styled.Root className={className}>
      <Container>
        <Styled.CoverWrapper>
          <Styled.Cover src={staticImagesMap.signUpLogin} />
        </Styled.CoverWrapper>
        <Styled.Description>Пожалуйста укажите ваш почтовый адрес</Styled.Description>
        <Styled.MailSection onSubmit={onSubmit}>
          <Styled.MailNumber placeholder='brainchelsey@gmail.com' {...emailInput} type='email' />
        </Styled.MailSection>
      </Container>

      <Styled.ButtonWrapper>
        <Button size='l' stretched onClick={onSubmit}>
          Далее
        </Button>
      </Styled.ButtonWrapper>
    </Styled.Root>
  )
}

export default WelcomeIntro
