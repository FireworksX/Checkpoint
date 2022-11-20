import styled from 'styled-components'
import Icon from 'src/components/Icon/Icon'
import PageHeaderButton from 'src/widgets/PageHeader/components/PageHeaderButton/PageHeaderButton'

export const Root = styled(PageHeaderButton)``

export const BackIcon = styled(Icon).attrs({
  name: 'caret-left',
  width: 20,
  height: 20
})`
  color: ${({ theme }) => theme.colors.textColorDark};
`
