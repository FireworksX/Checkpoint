import styled, { css } from 'styled-components'

interface Props {
  reversed?: boolean
}

export const Root = styled.div<Props>`
  ${({ reversed }) =>
    reversed
      ? css`
          margin-right: -${({ theme }) => theme.baseStyles.paddings.gutterMobile};
          margin-left: -${({ theme }) => theme.baseStyles.paddings.gutterMobile};
        `
      : css`
          padding-right: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
          padding-left: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
        `};
`
