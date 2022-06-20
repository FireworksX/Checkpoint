import styled from 'styled-components'

export const Root = styled.div``

export const Title = styled.h3`
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  margin-bottom: 10px;
`

export const FieldDescription = styled.div`
  ${({ theme }) => theme.typography.text_12_16};
  text-align: right;
  margin-top: 3px;
  color: ${({ theme }) => theme.colors.secondary};
`
