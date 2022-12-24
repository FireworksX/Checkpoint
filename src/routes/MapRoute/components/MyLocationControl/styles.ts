import styled from 'styled-components'
import Touchable from "../../../../components/Touchable/Touchable";

export const Root = styled(Touchable)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowBasic};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textColorDark};
  position: absolute;
  bottom: 120px;
  right: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  z-index: 2;
  
`
