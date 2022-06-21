import { FC } from 'react'
import * as Styled from './styles'

interface AverageBillFieldViewProps {
  className?: string
}

const AverageBillFieldView: FC<AverageBillFieldViewProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Title>Средний чек</Styled.Title>
      <Styled.Row>
        <Styled.Value>300-500 руб.</Styled.Value>
      </Styled.Row>
    </Styled.Root>
  )
}

export default AverageBillFieldView
