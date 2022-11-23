import styled, { css } from 'styled-components'
import { CounterProps } from './Counter'

interface Props {
  mode?: CounterProps['mode']
}

export const Root = styled.div<Props>`
  ${({ theme }) => theme.typography.text_14_24}
  padding: 4px 3px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusSecond};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;

  ${({ mode }) =>
    mode === 'accent' &&
    css`
      background: ${({ theme }) => theme.colors.primaryBg};
      color: ${({ theme }) => theme.colors.primary};
    `}
`
