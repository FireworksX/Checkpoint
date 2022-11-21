import styled from 'styled-components'
import Link from 'src/widgets/Link/Link'
import Avatar from 'src/widgets/Avatar/Avatar'
import Icon from '../Icon/Icon'
import Username from "../Username/Username";

export const Root = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 2px solid ${({ theme }) => theme.colors.borderCard};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
`

export const AvatarComponent = styled(Avatar).attrs({
  size: 44
})`
  margin-right: 7px;
`

export const Title = styled.div`
  ${({ theme }) => theme.typography.text_16_20};
  font-weight: bold;
  display: flex;
  align-items: center;
`

export const Description = styled(Username)`
  ${({ theme }) => theme.typography.text_12_16};
  color: ${({ theme }) => theme.colors.secondary};
`

export const VerifyIcon = styled(Icon).attrs({
  name: 'check-star'
})`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 10px;
`

export const FollowButton = styled.div`
  margin-left: auto;
`
