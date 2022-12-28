import styled from 'styled-components'
import Placeholder from "../Placeholder/Placeholder";

export const Root = styled(Placeholder)`
  padding: 10px 32px;
`

export const Title = styled.div`
  ${({ theme }) => theme.typography.text_18_22}
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.secondary};
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_14_24}
  color: ${({ theme }) => theme.colors.secondary};
`
