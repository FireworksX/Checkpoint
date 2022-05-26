import styled from 'styled-components'

export const Root = styled.div``

export const Title = styled.h2`
  ${({ theme }) => theme.typography.text_18_22}
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 15px;
`
