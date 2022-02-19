import styled from 'styled-components'

export const Root = styled.div`
  transition: ${({ theme }) => theme.animation.transitionDuration};
  &:active {
    transform: scale(0.9);
  }
`
