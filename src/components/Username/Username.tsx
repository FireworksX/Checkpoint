import { FC } from 'react'
import * as Styled from './styles'

interface UsernameProps {
  className?: string
}

const Username: FC<UsernameProps> = ({ className, children }) => {
  return <Styled.Root className={className}>@{children}</Styled.Root>
}

export default Username
