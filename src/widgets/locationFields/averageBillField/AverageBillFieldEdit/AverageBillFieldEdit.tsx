import { FC, useMemo, useState } from 'react'
import * as Styled from './styles'
import Slider from 'src/components/Slider/Slider'

interface AverageBillFieldEditProps {
  className?: string
}

const AverageBillFieldEdit: FC<AverageBillFieldEditProps> = ({ className }) => {
  const [values, setValues] = useState<[number, number]>([30, 70])

  const labelValues = useMemo(() => values.map(value => value * 150) as [number, number], [values])

  return (
    <Styled.Root className={className}>
      <Styled.View values={labelValues} />
      <Slider value={values} onChange={value => Array.isArray(value) && setValues(value)} />
    </Styled.Root>
  )
}

export default AverageBillFieldEdit
