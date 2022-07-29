import styled from 'styled-components'
import Button from 'src/components/Button/Button'
import Icon from '../../../../components/Icon/Icon'

export const Root = styled(Button)`
  font-weight: bold;
`

export const ButtonWrapper = styled.span`
  display: flex;
  align-items: center;
`

export const ButtonIcon = styled(Icon)`
  margin-right: 10px;
`
