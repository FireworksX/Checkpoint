import styled from 'styled-components'

export const Root = styled.div`
  padding: 3px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.backgroundWhite};
  width: 100%;
`

export const Input = styled.input`
  border: none;
  outline: none;
  ${({ theme }) => theme.typography.text_14_24};
  background: transparent;
  padding: 5px;
`
