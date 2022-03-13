import { FC } from 'react'
import * as Styled from './styles'
import Button from 'src/components/Button/Button'

interface WelcomeRegisterProps {
  className?: string
  onSendInvite?: () => any
}

const WelcomeRegister: FC<WelcomeRegisterProps> = ({ className, onSendInvite }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Title>Explore new emotions on Placesato</Styled.Title>
      <p>Now we give pass by invite, please enter your email for try service right now!</p>
      <div>
        <Styled.Field label='Your email' />
        <Button size='l' stretched onClick={onSendInvite}>
          Send invite
        </Button>
      </div>
    </Styled.Root>
  )
}

export default WelcomeRegister
