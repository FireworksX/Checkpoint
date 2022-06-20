import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: 5px 0;
`
