import { FC, useEffect, useRef } from 'react'
import { useTimeout } from 'react-use'
import * as Styled from './styles'
import Container from 'src/components/Container/Container'
import { useWelcomeCode } from './hooks/useWelcomeCode'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'
import { staticImagesMap } from '../../../../data/staticImagesMap'
import { CodeWrapper, Resend } from './styles'
import isBrowser from '../../../../utils/isBrowser'

interface WelcomeRegisterProps {
  email?: string
  className?: string
  onBack(): void
  onLogin(): void
  onRegister(): void
}

const WelcomeCode: FC<WelcomeRegisterProps> = ({ className, email, onLogin, onRegister, onBack }) => {
  const { codeValue, pageRef, fetching, onSetCodeValue } = useWelcomeCode({ email, onLogin, onRegister, onBack })

  return (
    <Styled.Root className={className} ref={pageRef} fetching={fetching}>
      <Container>
        <Styled.CoverWrapper>
          <Styled.Cover src={staticImagesMap.signUpLogin} />
        </Styled.CoverWrapper>

        <Styled.Description>
          A verification code sent to your email
          <Styled.DescriptionMail onClick={onBack}>{email}</Styled.DescriptionMail>
        </Styled.Description>
        <Styled.CodeInput placeholder='----' value={codeValue} onChange={e => onSetCodeValue(e.target.value)} />

        <Styled.Resend>
          Don`t receive code?
          <span>Resend</span>
        </Styled.Resend>
      </Container>
    </Styled.Root>
  )
}

export default WelcomeCode
