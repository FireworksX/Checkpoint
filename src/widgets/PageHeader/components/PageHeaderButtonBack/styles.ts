import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import Icon from 'src/components/Icon/Icon'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'

export const Root = styled(PageHeaderButton)``

export const BackIcon = styled(Icon).attrs({
  name: 'arrow-chevron',
  width: 20,
  height: 20
})`
  transform: rotate(180deg);
`
