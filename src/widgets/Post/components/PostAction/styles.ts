import styled from 'styled-components'
import IconComp from 'src/components/Icon/Icon'
import Touchable from 'src/components/Touchable/Touchable'

export const Root = styled(Touchable)`
  background: ${({ theme }) => theme.colors.secondaryDisabled};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  padding: 5px 10px;
  ${({ theme }) => theme.typography.text_14_20};
  font-weight: bold;
`

export const Icon = styled(IconComp)`
  margin-right: 5px;
`
