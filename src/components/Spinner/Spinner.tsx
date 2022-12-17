import { FC } from 'react'
import * as Styled from './styles'
import { buildStyles } from 'react-circular-progressbar'
import { useTheme } from 'styled-components'
import Icon from '../Icon/Icon'

export interface SpinnerProps {
  state?: 'error' | 'success'
  size?: 'small' | 'regular' | 'medium' | 'large'
  pathColor?: string
  className?: string
}

const CheckIcon = ({ width, height }: { width: number; height: number }) => (
  <svg width={width} height={height} viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 24L19 34L39 14' stroke='currentColor' strokeWidth='3.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Spinner: FC<SpinnerProps> = ({ className, size = 'regular', state, pathColor }) => {
  const theme = useTheme()
  const color = pathColor || theme.colors.secondary
  const statusSize = { small: 10, regular: 18, medium: 18, large: 48 }[size]

  return (
    <Styled.Root className={className} size={size}>
      {!state && (
        <Styled.Bar>
          <Styled.BarInner
            size={size}
            strokeWidth={8}
            value={70}
            styles={buildStyles({
              pathColor: pathColor || theme.colors.secondary,
              trailColor: 'transparent',
              backgroundColor: 'transparent'
            })}
          />
        </Styled.Bar>
      )}

      <Styled.Status>
        {state === 'error' && (
          <Styled.IconWrapper style={{ color }}>
            <Icon name='close' width={statusSize} height={statusSize} />
          </Styled.IconWrapper>
        )}
        {state === 'success' && (
          <Styled.IconWrapper style={{ color }}>
            <CheckIcon width={statusSize} height={statusSize} />
          </Styled.IconWrapper>
        )}
      </Styled.Status>
    </Styled.Root>
  )
}

export default Spinner
