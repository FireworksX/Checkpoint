import styled from 'styled-components'
import IconComp from 'src/components/Icon/Icon'
import Touchable from 'src/components/Touchable/Touchable'

export const Root = styled(Touchable)``

export const Label = styled.div`
  ${({ theme }) => theme.typography.text_12_16};
`

export const Value = styled.div`
  ${({ theme }) => theme.typography.text_16_20};
  font-weight: bold;
`

export const Icon = styled(IconComp)``
