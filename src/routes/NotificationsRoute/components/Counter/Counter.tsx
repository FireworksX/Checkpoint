import { FC } from 'react'
import * as Styled from './styles'

export interface CounterProps {
  mode?: 'accent'
  className?: string
}

const Counter: FC<CounterProps> = ({ className, children, mode }) => {
  return (
    <Styled.Root className={className} mode={mode}>
      {children}
    </Styled.Root>
  )
}

export default Counter
