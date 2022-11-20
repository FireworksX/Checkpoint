import { FC, ReactNode } from 'react'
import * as Styled from './styles'

interface CounterCellProps {
  value: ReactNode
  description: ReactNode
  className?: string
}

const CounterCell: FC<CounterCellProps> = ({ className, value, description }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Value>{value}</Styled.Value>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Root>
  )
}

export default CounterCell
