import styled from 'styled-components'
import Touchable from "../../components/Touchable/Touchable";

export const Root = styled.div`
  display: inline-flex;
  position: relative;
`

export const Reset = styled(Touchable)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.secondary};
`
