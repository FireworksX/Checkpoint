import { FC } from 'react'
import * as Styled from './styles'

interface AverageBillFieldViewProps {
  className?: string
    values: [number, number]
}

const AverageBillFieldView: FC<AverageBillFieldViewProps> = ({ className, values: [from, to] }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Title>Средний чек</Styled.Title>
      <Styled.Row>
        <Styled.Value>{from}-{to} руб.</Styled.Value>
      </Styled.Row>
    </Styled.Root>
  )
}

export default AverageBillFieldView
