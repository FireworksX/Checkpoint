import { FC } from 'react'
import * as Styled from './styles'
import Touchable from 'src/components/Touchable/Touchable'
import Container from 'src/components/Container/Container'
import Button from 'src/components/Button/Button'
import { useUsernameFormatter } from 'src/components/Input/hooks/useUsernameFormatter'

interface WelcomeRegisterProps {
  className?: string
  phone?: string
  phoneCode?: string
  onBack?: () => void
}

const WelcomeRegister: FC<WelcomeRegisterProps> = ({ className, phone, phoneCode, onBack }) => {
  const { formatValue, setValue } = useUsernameFormatter()

  return (
    <Styled.Root className={className}>
      <Container>
        <Styled.Header left={<Touchable onClick={onBack}>Back</Touchable>} right={<Touchable>Next</Touchable>} />

        <Styled.Avatar src='https://avatars.githubusercontent.com/u/22668125?v=4' />
        <Button size='l' mode='tertiary' stretched>
          Set new avatar
        </Button>

        <Styled.Field placeholder='@username' value={formatValue} onChange={e => setValue(e.target.value)} />
        <Styled.Field placeholder='First name' />
        <Styled.Field placeholder='Last name' />
        <Styled.Field placeholder='Bio' textarea />
      </Container>
    </Styled.Root>
  )
}

export default WelcomeRegister
