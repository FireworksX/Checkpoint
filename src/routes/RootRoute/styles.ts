import styled from 'styled-components'

export const Root = styled.div`
  background: ${({ theme }) => theme.colors.background};
  height: 100%;
  min-height: 100vh;
`

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
