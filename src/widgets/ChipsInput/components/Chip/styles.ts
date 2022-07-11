import styled from 'styled-components'
import Touchable from "src/components/Touchable/Touchable";

export const Root = styled(Touchable)`
  ${({ theme }) => theme.typography.text_14_24};
  padding: 3px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px 5px 0;
  background: ${({ theme }) => theme.colors.background};
`

export const Before = styled.div`
  display: flex;
  margin-right: 10px;
`

export const Removable = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
