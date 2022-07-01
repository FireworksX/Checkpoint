import styled, { css } from 'styled-components'
import { TouchableProps } from './Touchable'

interface Props {
  effect?: TouchableProps['effect']
}

export const Root = styled.div<Props>`
  transition: ${({ theme }) => theme.animation.transitionDuration};
  outline: none;

  ${({ effect }) =>
    effect !== 'none' &&
    css`
      &:active {
        transform: scale(0.9);
      }
    `};
`
