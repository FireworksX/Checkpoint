import { FC } from 'react'
import { useTimeout } from 'react-use'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import { useWelcomeCode } from './hooks/useWelcomeCode'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import { staticImagesMap } from '../../../../data/staticImagesMap'
import { Resend } from './styles'

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
        <Styled.CoverWrapper>
          <Styled.Cover src={staticImagesMap.signUpLogin} />
        </Styled.CoverWrapper>

        <Styled.Description>
          A verification code sent to your email
          <Styled.DescriptionMail onClick={onBack}>{'fireworks@gmail.com'}</Styled.DescriptionMail>
        </Styled.Description>
        <Styled.CodeInput placeholder='0000' value={codeValue} onChange={e => onSetCodeValue(e.target.value)} />

        <Styled.Resend>
          Don`t receive code?
          <span>Resend</span>
        </Styled.Resend>
      </Container>
    </Styled.Root>
  )
}

export default WelcomeCode
