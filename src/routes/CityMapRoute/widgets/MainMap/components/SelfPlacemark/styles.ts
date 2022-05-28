import styled from 'styled-components'

export const Root = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accentRed};
  border: 4px solid ${({ theme }) => theme.colors.border};
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  position: absolute;
  top: -15px;
  left: -15px;
`
