import styled from 'styled-components'
import Icon from '../Icon/Icon'

export const Root = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`

export const IconDelim = styled(Icon).attrs({ width: 24, height: 24 })`
  margin: 0 20px;
  color: ${({ theme }) => theme.colors.border};
  min-width: 24px;
`

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`
