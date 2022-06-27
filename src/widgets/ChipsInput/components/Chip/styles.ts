import styled from 'styled-components'

export const Root = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
  padding: 3px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px 5px 0;
  background: ${({ theme }) => theme.colors.background};
`
