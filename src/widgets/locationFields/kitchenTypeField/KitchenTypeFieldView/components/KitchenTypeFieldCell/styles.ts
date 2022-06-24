import styled from 'styled-components'

export const Root = styled.div`
  padding: 3px 10px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  background: ${({ theme }) => theme.colors.backgroundWhite};
  ${({ theme }) => theme.typography.text_14_24};
  margin: 0 5px 5px 0;
`
