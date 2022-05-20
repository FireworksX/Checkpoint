import { FC } from 'react'
import * as Styled from './styles'
import Touchable from 'src/components/Touchable/Touchable'
import Container from 'src/components/Container/Container'
import { usePhoneFormatter } from 'src/components/Input/hooks/usePhoneFormatter'

interface WelcomeRegisterProps {
  className?: string
  phone?: string
  onSubmit?: (data: { phone: string; phoneCode: string }) => void
}

const WelcomeIntro: FC<WelcomeRegisterProps> = ({ className, phone, onSubmit }) => {
  const { formatValue, setValue } = usePhoneFormatter(phone)

  return (
    <Styled.Root className={className}>
      <Container>
        <Styled.Header
          right={
            <Touchable
              onClick={() =>
                onSubmit &&
                onSubmit({
                  phone: formatValue,
                  phoneCode: '+7'
                })
              }
            >
              Next
            </Touchable>
          }
        />
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
        <Styled.PhoneNumber placeholder='--- --- ----' value={formatValue} onChange={e => setValue(e.target.value)} />
      </Styled.PhoneSection>
    </Styled.Root>
  )
}

export default WelcomeIntro
