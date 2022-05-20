import styled, { css } from 'styled-components'

export const Root = styled.header`
  position: relative;
  transition: ${({ theme }) => theme.animation.transitionDuration};
  width: 100%;
  padding: 10px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.baseStyles.sizes.headerHeight}px;
`

export const Center = styled.div``

const sidesCss = css`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 0;
  font-weight: bold;
  ${({ theme }) => theme.typography.text_16_20};
  color: ${({ theme }) => theme.colors.primary};
  
`

export const Left = styled.div`
  ${sidesCss}
  justify-content: flex-start;
`

export const Right = styled.div`
  ${sidesCss}
  justify-content: flex-end;
`
