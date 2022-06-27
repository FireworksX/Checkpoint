import { FC, useMemo } from 'react'
import * as Styled from './styles'

interface AverageBillFieldViewProps {
  className?: string
  values: [number, number]
}

const AverageBillFieldView: FC<AverageBillFieldViewProps> = ({ className, values }) => {
  const labelValues = useMemo(() => values.map(value => value * 150) as [number, number], [values])

  return (
    <Styled.Root className={className}>
      <Styled.Title>Средний чек</Styled.Title>
      <Styled.Row>
        <Styled.Value>{labelValues.join(' - ')} руб.</Styled.Value>
      </Styled.Row>
    </Styled.Root>
  )
}

export default AverageBillFieldView
