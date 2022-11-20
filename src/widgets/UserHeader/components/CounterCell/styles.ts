import styled from 'styled-components'

export const Root = styled.div`
  text-align: center;
`

export const Value = styled.div`
  ${({ theme }) => theme.typography.text_18_22};
  font-weight: bold;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_14_20};
  color: ${({ theme }) => theme.colors.secondary};
`
