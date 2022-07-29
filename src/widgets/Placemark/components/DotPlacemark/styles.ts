import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'

export const Root = styled(Touchable)`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  left: -10px;
`

export const Inner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid ${({ theme }) => theme.colors.basicWhite};
  box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowBig};
  background: ${({ theme }) => theme.colors.basicBlack};
  border-radius: 50%;
`
