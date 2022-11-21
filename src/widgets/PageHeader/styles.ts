import styled, { css } from 'styled-components'

export const Root = styled.header`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.textColorDark};
  transition: ${({ theme }) => theme.animation.transitionDuration};
  width: 100%;
  padding: 10px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.baseStyles.sizes.headerHeight}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const Center = styled.div`
  flex-grow: 1;
  text-align: center;
  ${({ theme }) => theme.typography.text_18_22};
  font-weight: bold;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_10_12};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: normal;
`

const sidesCss = css`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 0;
`

export const Left = styled.div`
  ${sidesCss}
  justify-content: flex-start;
`

export const Right = styled.div`
  ${sidesCss}
  justify-content: flex-end;
`
