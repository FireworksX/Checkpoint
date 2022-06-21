import { FC } from 'react'
import * as Styled from './styles'
import ProgressBar from 'src/components/ProgressBar/ProgressBar'

interface WifispeedFieldViewProps {
  className?: string
}

const WifispeedFieldView: FC<WifispeedFieldViewProps> = ({ className }) => {
  return (
    <Styled.Root className={className}>
      <ProgressBar label={<Styled.Title>Скорость WiFi</Styled.Title>} value={40} />
      <Styled.FieldDescription>15 мбит/с</Styled.FieldDescription>
    </Styled.Root>
  )
}

export default WifispeedFieldView
