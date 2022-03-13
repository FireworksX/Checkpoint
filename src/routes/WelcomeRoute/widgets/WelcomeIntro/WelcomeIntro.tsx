import { FC } from 'react'
import * as Styled from './styles'

interface WelcomeRegisterProps {
  className?: string
  onClickInvite?: () => any
  onClickLogin?: () => any
}

const WelcomeIntro: FC<WelcomeRegisterProps> = ({ className, onClickInvite, onClickLogin }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Title>Inspire the world</Styled.Title>
      <Styled.Description>
        Add the places you love to online map accessible everyone. Make remarks, rate the places, share the experience.
      </Styled.Description>
      <Styled.Button size='l' stretched onClick={onClickInvite}>
        Get invite
      </Styled.Button>
      <Styled.Button color='secondary' size='l' stretched onClick={onClickLogin}>
        Login
      </Styled.Button>
    </Styled.Root>
  )
}

export default WelcomeIntro
