import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'

export const Root = styled(Touchable)`
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  background: ${({ theme }) => theme.colors.backgroundWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.iconBasic};
`
