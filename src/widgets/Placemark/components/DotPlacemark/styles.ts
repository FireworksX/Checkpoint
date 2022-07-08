import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'

export const Root = styled(Touchable)`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -15px;
  left: -15px;
`

export const Inner = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid ${({ theme }) => theme.colors.basicWhite};
  box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowBig};
  background: ${({ theme }) => theme.colors.basicBlack};
  border-radius: 50%;
`
