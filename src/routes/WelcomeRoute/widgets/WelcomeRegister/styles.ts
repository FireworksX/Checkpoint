import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Touchable from 'src/components/Touchable/Touchable'
import Input from '../../../../components/Input/Input'
import CommonLogo from '../../../../components/CommonLogo/CommonLogo'
import Container from '../../../../components/Container/Container'

export const Root = styled.div``

export const Header = styled(PageHeader)`
  margin-bottom: 30px;
`

export const Avatar = styled(CommonLogo).attrs({
  size: 90,
  withRadius: true
})`
  margin: 0 auto 10px auto;
`

export const Field = styled(Input)`
  margin-bottom: 15px;
`
