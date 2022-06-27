import { FC } from 'react'
import * as Styled from './styles'
import ProgressBar from 'src/components/ProgressBar/ProgressBar'

interface WifispeedFieldViewProps {
  value: number
  className?: string
}

const WifispeedFieldView: FC<WifispeedFieldViewProps> = ({ className, value }) => {
  const valueLabel = value === 0 ? 'Интернет говно' : value === 100 ? 'Цифры запредельные' : `${value} мбит/с`

  return (
    <Styled.Root className={className}>
      <ProgressBar label={<Styled.Title>Скорость WiFi</Styled.Title>} value={value} />
      <Styled.FieldDescription>{valueLabel}</Styled.FieldDescription>
    </Styled.Root>
  )
}

export default WifispeedFieldView
