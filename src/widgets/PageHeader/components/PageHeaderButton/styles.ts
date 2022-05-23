import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'

export const Root = styled(Touchable)`
  font-weight: bold;
  ${({ theme }) => theme.typography.text_16_20};
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: none;
  outline: none;
`
