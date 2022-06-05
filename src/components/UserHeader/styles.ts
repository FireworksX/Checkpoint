import styled from 'styled-components'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Avatar from "src/widgets/Avatar/Avatar";

export const Root = styled(Container)`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const AvatarComponent = styled(Avatar).attrs({ size: 90 })`
  margin-right: 30px;
`

export const NameWrapper = styled.div`
  width: 100%;
`

export const Name = styled.h2`
  ${({ theme }) => theme.typography.text_20_24}
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  display: flex;
  align-items: center;
`

export const VerifyIcon = styled(Icon).attrs({
  name: 'check-star'
})`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 10px;
`

export const Description = styled.p`
  ${({ theme }) => theme.typography.text_14_24}
`
