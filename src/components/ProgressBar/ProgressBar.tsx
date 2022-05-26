import { FC } from 'react'
import * as Styled from './styles'

interface ProgressBarProps {
  value: number
  label?: string
  className?: string
  limit?: number
  colorScheme?: {
    value: number
    color: string
  }[]

  labelClassName?: string
}

const ProgressBar: FC<ProgressBarProps> = ({
  className,
  limit = 100,
  value = 0,
  label,
  colorScheme = [],
  labelClassName
}) => {
  const proxyValue = Math.min(value, limit)
  const filterColors = colorScheme.filter(scheme => proxyValue > scheme.value)
  const findColor = filterColors[filterColors.length - 1]

  return (
    <Styled.Root className={className}>
      {label && <Styled.Label className={labelClassName}>{label}</Styled.Label>}
      <Styled.BackSide>
        <Styled.FrontSide value={proxyValue} color={findColor?.color} />
      </Styled.BackSide>
    </Styled.Root>
  )
}

export default ProgressBar
