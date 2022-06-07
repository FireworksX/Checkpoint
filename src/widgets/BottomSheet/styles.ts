import styled, { createGlobalStyle } from 'styled-components'

interface Props {
  withHeader?: boolean
  withBackground?: boolean
}

export const Root = styled.div``

export const Global = createGlobalStyle<Props>`
  [data-rsbs-header] {
    ${({ withHeader }) => !withHeader && 'display: none;'};
  }

  [data-rsbs-overlay] {
    ${({ withBackground }) => !withBackground && 'background: transparent !important;'};
  }
`
