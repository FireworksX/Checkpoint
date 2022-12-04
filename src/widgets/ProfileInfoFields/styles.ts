import styled from 'styled-components'
import Avatar from 'src/widgets/Avatar/Avatar'
import Input from 'src/components/Input/Input'
import Touchable from "../../components/Touchable/Touchable";

export const Root = styled.div``

export const AvatarWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
  position: relative;
`

export const AvatarComponent = styled(Avatar).attrs({
  size: 90
})``

export const Field = styled(Input)`
  margin-bottom: 15px;
`
