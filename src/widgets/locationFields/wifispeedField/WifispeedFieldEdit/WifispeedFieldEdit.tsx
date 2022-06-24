import { FC, useState } from 'react'
import * as Styled from './styles'
import ProgressBar from 'src/components/ProgressBar/ProgressBar'
import Slider from 'src/components/Slider/Slider'

interface WifispeedFieldEditProps {
  className?: string
}

const WifispeedFieldEdit: FC<WifispeedFieldEditProps> = ({ className }) => {
  const [value, setValue] = useState(0)

  const valueLabel = value === 0 ? 'Интернет говно' : value === 100 ? 'Цифры запредельные' : `${value} мбит/с`

  return (
    <Styled.Root className={className}>
      <ProgressBar label={<Styled.Title>Скорость WiFi</Styled.Title>} value={value} />
      <Styled.FieldDescription>{valueLabel}</Styled.FieldDescription>
      <Slider value={value} onChange={setValue} />
    </Styled.Root>
  )
}

export default WifispeedFieldEdit
