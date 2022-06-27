import { FC } from 'react'
import * as Styled from './styles'
import Slider from 'src/components/Slider/Slider'

interface WifispeedFieldEditProps {
  value: number
  className?: string
  onChange(value: number): void
}

const WifispeedFieldEdit: FC<WifispeedFieldEditProps> = ({ className, value, onChange }) => {
  return (
    <Styled.Root className={className}>
      <Styled.View value={value} />
      <Slider value={value} onChange={value => !Array.isArray(value) && onChange(value)} />
    </Styled.Root>
  )
}

export default WifispeedFieldEdit
