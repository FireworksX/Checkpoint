import Touchable from 'src/components/Touchable/Touchable'
import styled from 'styled-components'

export const Root = styled.div`
  ${({ theme }) => theme.typography.text_14_24};
`

export const More = styled(Touchable).attrs({ tagName: 'span' })`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin: 0 10px;
`
