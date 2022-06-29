import { FC } from 'react'
import { useTheme } from 'styled-components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import * as Styled from './styles'

interface CircleProgressProps {
  progress: number
  size?: number
  className?: string
}

const CircleProgress: FC<CircleProgressProps> = ({ className, progress, size = 20 }) => {
  const theme = useTheme()

  return (
    <Styled.Root className={className} size={size}>
      <Styled.ProgressWrapper>
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            pathColor: theme.colors.textWhite,
            trailColor: 'transparent',
            backgroundColor: 'transparent'
          })}
        />
      </Styled.ProgressWrapper>
    </Styled.Root>
  )
}

export default CircleProgress
