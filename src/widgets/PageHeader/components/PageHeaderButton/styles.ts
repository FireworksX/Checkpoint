import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'

interface Props {
  disabled?: boolean
}

export const Root = styled(Touchable)<Props>`
  font-weight: bold;
  ${({ theme }) => theme.typography.text_16_20};
  color: ${({ theme, disabled }) => disabled ? theme.colors.primaryDisable : theme.colors.primary};
  background: transparent;
  border: none;
  outline: none;
`
