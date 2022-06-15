import styled from 'styled-components'
import Page from 'src/widgets/Page/Page'

export const Root = styled(Page)`
  position: relative;
`

export const Title = styled.h1`
  ${({ theme }) => theme.typography.text_32_38};
  color: ${({ theme }) => theme.colors.basicWhite};
  margin-bottom: 10px;
  font-weight: bold;
`

export const Description = styled.h2`
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.basicWhite};
`
