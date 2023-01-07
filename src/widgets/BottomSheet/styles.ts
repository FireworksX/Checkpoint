import styled, { createGlobalStyle } from 'styled-components'

interface Props {
  withHeader?: boolean
  withBackground?: boolean
}

export const Root = styled.div``

export const Global = createGlobalStyle<Props>`
  [data-rsbs-header] {
    ${({ withHeader }) => !withHeader && 'display: none;'};
    position: absolute;
    top: -20px;
    width: 100%;
    
    &:before {
        background-color: ${({ theme }) => theme.colors.backgroundLight} !important;
        width: 50px !important;
    }
  }

  [data-rsbs-overlay] {
    ${({ withBackground }) => !withBackground && 'background: transparent !important;'};
  }
`
