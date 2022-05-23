import { FC } from 'react'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import { useWelcomeCode } from './hooks/useWelcomeCode'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'

interface WelcomeRegisterProps {
  className?: string
  onBack(): void
  onLogin(): void
  onRegister(): void
}

const WelcomeCode: FC<WelcomeRegisterProps> = ({ className, onLogin, onRegister, onBack }) => {
  const { phone, codeValue, onSetCodeValue } = useWelcomeCode({ onLogin, onRegister, onBack })

  return (
    <Styled.Root className={className}>
      <Container>
        <Styled.Header left={<PageHeaderButton onClick={onBack}>Back</PageHeaderButton>} />
        <Styled.Title>{phone}</Styled.Title>
        <Styled.Description>We've sent the code to your phone via SMS</Styled.Description>
        <Styled.CodeInput value={codeValue} onChange={e => onSetCodeValue(e.target.value)} />
      </Container>
    </Styled.Root>
  )
}

export default WelcomeCode
