import { FC } from 'react'
import { useTimeout } from 'react-use'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import { useWelcomeCode } from './hooks/useWelcomeCode'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import {staticImagesMap} from "../../../../data/staticImagesMap";

interface WelcomeRegisterProps {
  className?: string
  onBack(): void
  onLogin(): void
  onRegister(): void
}

const WelcomeCode: FC<WelcomeRegisterProps> = ({ className, onLogin, onRegister, onBack }) => {
  const { mail, codeValue, onSetCodeValue } = useWelcomeCode({ onLogin, onRegister, onBack })

  return (
    <Styled.Root className={className}>
      <Container>
        <Styled.Header left={<PageHeaderButton onClick={onBack}>Назад</PageHeaderButton>} />
        <Styled.CoverWrapper>
          <Styled.Cover src={staticImagesMap.signUpLogin} />
        </Styled.CoverWrapper>

        <Styled.Description>Мы отправили вам письмо с кодом подтверждения</Styled.Description>
        <Styled.CodeInput placeholder='0000' value={codeValue} onChange={e => onSetCodeValue(e.target.value)} />
        <Styled.Value>{mail}</Styled.Value>
      </Container>
    </Styled.Root>
  )
}

export default WelcomeCode
