import { FC } from 'react'
import * as Styled from './styles'
import Slider from 'src/components/Slider/Slider'

interface AverageBillFieldEditProps {
  className?: string
  values: [number, number]
  onChange(values: [number, number]): void
}

const AverageBillFieldEdit: FC<AverageBillFieldEditProps> = ({ className, values, onChange }) => {

  return (
    <Styled.Root className={className}>
      <Styled.View values={values} />
      <Slider value={values} onChange={value => Array.isArray(value) && onChange(value)} />
    </Styled.Root>
  )
}

export default AverageBillFieldEdit
