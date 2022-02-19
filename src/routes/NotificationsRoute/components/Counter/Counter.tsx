import { FC } from 'react'
import * as Styled from './styles'

interface CounterProps {
  className?: string
}

const Counter: FC<CounterProps> = ({ className, children }) => {
  return <Styled.Root className={className}>{children}</Styled.Root>
}

export default Counter
