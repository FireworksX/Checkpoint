import { FC } from 'react'
import * as Styled from './styles'
import Touchable from 'src/components/Touchable/Touchable'
import Container from 'src/components/Container/Container'
import { useNumberFormatter } from 'src/components/Input/hooks/useNumberFormatter'

interface WelcomeRegisterProps {
  className?: string
  phone?: string
  phoneCode?: string
  onBack?: () => void
  onSubmit?: () => void
}

const WelcomeCode: FC<WelcomeRegisterProps> = ({ className, phone, phoneCode,onSubmit, onBack }) => {
  const { formatValue, setValue } = useNumberFormatter()

  return (
    <Styled.Root className={className}>
      <Container>
        <Styled.Header left={<Touchable onClick={onBack}>Back</Touchable>} right={<Touchable onClick={onSubmit}>Next</Touchable>} />
        <Styled.Title>
          {phoneCode} {phone}
        </Styled.Title>
        <Styled.Description>We've sent the code to your phone via SMS</Styled.Description>
        <Styled.CodeInput value={formatValue} onChange={e => setValue(e.target.value)} />
      </Container>
    </Styled.Root>
  )
}

export default WelcomeCode
