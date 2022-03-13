import { FC, useCallback, useState } from 'react'
import * as Styled from './styles'
import Button from 'src/components/Button/Button'
import { useLoginUser } from 'src/hooks/data/useAuthUser'

interface WelcomeAuthProps {
  className?: string
  onSuccess: () => any
}

const WelcomeAuth: FC<WelcomeAuthProps> = ({ className, onSuccess }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const { execute, fetching } = useLoginUser()

  const onSubmit = useCallback(
    async e => {
      e.preventDefault()

      const response = await execute({
        login,
        password
      })

      if (response.success) {
        onSuccess()
      }
    },
    [login, password]
  )

  return (
    <Styled.Root className={className}>
      <Styled.Title>Log in</Styled.Title>
      <Styled.Description>Received an invite? Enter below..</Styled.Description>

      <form onSubmit={onSubmit}>
        <Styled.Field label='Login' type='text' value={login} onChange={({ target: { value } }) => setLogin(value)} />
        <Styled.Field
          label='Password'
          type='password'
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <Button size='l' stretched>
          {fetching ? 'Loading...' : 'Submit'}
        </Button>
      </form>
    </Styled.Root>
  )
}

export default WelcomeAuth
