import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Title = styled.h3`
  ${({ theme }) => theme.typography.text_14_24};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  margin-bottom: 10px;
`
