import styled from 'styled-components'
import IconComp from 'src/components/Icon/Icon'
import Touchable from 'src/components/Touchable/Touchable'

interface Props {
  isActive?: boolean
}

export const Root = styled(Touchable)<Props>`
  background: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.secondaryDisabled};
  color: ${({ theme, isActive }) => isActive ? theme.colors.secondaryBg : theme.colors.textColorDark};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  padding: 5px 10px;
  ${({ theme }) => theme.typography.text_14_20};
  font-weight: bold;
`

export const Icon = styled(IconComp)`
  margin-right: 5px;
`
