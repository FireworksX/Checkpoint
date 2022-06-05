import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Input from 'src/components/Input/Input'
import Avatar from 'src/widgets/Avatar/Avatar'

export const Root = styled.div``

export const Header = styled(PageHeader)`
  margin-bottom: 30px;
`

export const AvatarWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

export const AvatarComponent = styled(Avatar).attrs({
  size: 90
})``

export const Field = styled(Input)`
  margin-bottom: 15px;
`
