import { FC } from 'react'
import * as Styled from './styles'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { useTheme } from 'styled-components'

export interface SpinnerProps {
  size?: 'small' | 'regular' | 'medium' | 'large'
  pathColor?: string
  className?: string
}

const Spinner: FC<SpinnerProps> = ({ className, size, pathColor }) => {
  const theme = useTheme()

  return (
    <Styled.Root className={className} size={size}>
      <CircularProgressbar
        strokeWidth={12}
        value={70}
        styles={buildStyles({
          pathColor: pathColor || theme.colors.secondary,
          trailColor: 'transparent',
          backgroundColor: 'transparent'
        })}
      />
    </Styled.Root>
  )
}

export default Spinner
