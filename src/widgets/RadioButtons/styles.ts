import styled from 'styled-components'
import Touchable from "src/components/Touchable/Touchable";

export const Root = styled.div``

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 15px 0;
  width: 100%;
`

export const Cell = styled(Touchable)`
  display: flex;
  align-items: center;

  &:last-child {
    ${Body} {
      border-bottom: none;
    }
  }
`

export const Label = styled.div`
  ${({ theme }) => theme.typography.text_16_20};
  color: ${({ theme }) => theme.colors.textColorDark};
  font-weight: bold;
`

export const Dot = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
`

export const DotInner = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.backgroundDark};
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_12_16};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 400;
`
