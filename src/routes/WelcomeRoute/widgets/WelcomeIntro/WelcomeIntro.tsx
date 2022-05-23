import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import { useWelcomeIntro } from './hooks/useWelcomeIntro'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'

interface WelcomeRegisterProps {
  className?: string
  phone?: string
  onNext(): void
}

const WelcomeIntro: FC<WelcomeRegisterProps> = ({ className, phone, onNext }) => {
  const { phoneValue, onSetPhoneValue, onSubmit } = useWelcomeIntro({
    onNext,
    onBack: () => undefined
  })

  return (
    <Styled.Root className={className}>
      <Container>
        <Styled.Header right={<PageHeaderButton onClick={onSubmit}>Next</PageHeaderButton>} />
        <Styled.Title>Your phone</Styled.Title>
        <Styled.Description>Please confirm your country code and your phone number.</Styled.Description>
      </Container>

      <Styled.CountrySection>
        <Styled.CountrySector>
          <Styled.CountryFlag size={30} iso='ru' />
          Russia
        </Styled.CountrySector>
      </Styled.CountrySection>
      <Styled.PhoneSection>
        <Styled.PhoneCode value='+7' />
        <Styled.PhoneNumber
          placeholder='--- --- ----'
          value={phoneValue}
          onChange={e => onSetPhoneValue(e.target.value)}
        />
      </Styled.PhoneSection>
    </Styled.Root>
  )
}

export default WelcomeIntro
