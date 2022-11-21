import styled from 'styled-components'

export const Root = styled.div`
  ${({ theme }) => theme.typography.text_14_24}
  padding: 7px 3px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusSecond};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
`
