import styled from 'styled-components'

export const Root = styled.header`
  position: relative;
  transition: ${({ theme }) => theme.animation.transitionDuration};
  width: 100%;
  padding: 10px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
`
