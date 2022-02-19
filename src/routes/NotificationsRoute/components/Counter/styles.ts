import styled from 'styled-components'

export const Root = styled.div`
  ${({ theme }) => theme.typography.text_14_24}
  padding: 7px;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
`
