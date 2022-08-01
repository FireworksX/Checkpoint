import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import { useWelcomeIntro } from './hooks/useWelcomeIntro'
import Button from 'src/components/Button/Button'

interface WelcomeRegisterProps {
  className?: string
  phone?: string
  onNext(): void
}

const WelcomeIntro: FC<WelcomeRegisterProps> = ({ className, onNext }) => {
  const { phoneValue, onSetPhoneValue, onSubmit } = useWelcomeIntro({
    onNext,
    onBack: () => undefined
  })

  return (
    <Styled.Root className={className}>
      <Container>
        <Styled.Title>Ваш телефон</Styled.Title>
        <Styled.Description>Пожалуйста подтвердите вашу страну и номер телефона</Styled.Description>
      </Container>

      <Styled.CountrySection>
        <Styled.CountrySector>
          <Styled.CountryFlag size={30} iso='ru' />
          Россия
        </Styled.CountrySector>
      </Styled.CountrySection>
      <Styled.PhoneSection onSubmit={onSubmit}>
        <Styled.PhoneCode defaultValue='+7' readOnly />
        <Styled.PhoneNumber
          placeholder='--- --- ----'
          value={phoneValue}
          onChange={e => onSetPhoneValue(e.target.value)}
        />
      </Styled.PhoneSection>

      <Styled.ButtonWrapper>
        <Button size='l' stretched onClick={onSubmit}>
          Далее
        </Button>
      </Styled.ButtonWrapper>
    </Styled.Root>
  )
}

export default WelcomeIntro
