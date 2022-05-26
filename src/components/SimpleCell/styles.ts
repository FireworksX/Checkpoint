import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'

export const Root = styled(Touchable)`
  padding: 0 12px;
  min-height: 48px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};
`

export const Before = styled.div`
  margin: 4px 12px 4px 0;
`

export const Main = styled.div`
  flex-grow: 1;
  ${({ theme }) => theme.typography.text_16_20};
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_14_20};
  color: ${({ theme }) => theme.colors.secondary};
`

export const Expandable = styled.div`
  margin: 0 4px 0 12px;
  color: ${({ theme }) => theme.colors.border};
`
