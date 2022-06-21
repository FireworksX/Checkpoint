import {FC, ReactNode} from 'react'
import * as Styled from './styles'
import {useTheme} from "styled-components";

export interface ProgressBarProps {
  value: number
  label?: ReactNode
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
  const theme = useTheme()
  const DEFAULT_COLORS: ProgressBarProps['colorScheme'] = [
    {
      color: theme.colors.accentRed,
      value: 0
    },
    {
      color: theme.colors.accentAmber,
      value: 25
    },
    { color: theme.colors.accentBlue, value: 50 },
    { color: theme.colors.statusSuccessText, value: 75 }
  ]

  if (colorScheme?.length === 0) {
    colorScheme = DEFAULT_COLORS
  }

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
