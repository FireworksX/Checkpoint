import { FC } from 'react'
import * as Styled from './styles'
import ProgressBar, { ProgressBarProps } from 'src/components/ProgressBar/ProgressBar'
import { useTheme } from 'styled-components'

interface WifispeedFieldViewProps {
  className?: string
}

const WifispeedFieldView: FC<WifispeedFieldViewProps> = ({ className }) => {
  const theme = useTheme()

  const SPEED_COLORS: ProgressBarProps['colorScheme'] = [
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

  return (
    <Styled.Root className={className}>
      <ProgressBar colorScheme={SPEED_COLORS} label={<Styled.Title>Скорость WiFi</Styled.Title>} value={40} />
      <Styled.FieldDescription>15 мбит/с</Styled.FieldDescription>
    </Styled.Root>
  )
}

export default WifispeedFieldView
