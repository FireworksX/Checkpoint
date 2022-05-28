import { FC } from 'react'
import * as Styled from './styles'

interface CurrentLocationSelectProps {
  className?: string
}

const CurrentLocationSelect: FC<CurrentLocationSelectProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Label>Выбранный город</Styled.Label>
      <Styled.Value>
        Санкт-Петергург
        <Styled.Icon name='arrow-chevron-small' />
      </Styled.Value>
    </Styled.Root>
  )
}

export default CurrentLocationSelect
