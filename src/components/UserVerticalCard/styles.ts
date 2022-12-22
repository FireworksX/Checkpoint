import styled from 'styled-components'
import Avatar from '../../widgets/Avatar/Avatar'
import Username from '../Username/Username'
import Icon from '../Icon/Icon'
import Link from '../../widgets/Link/Link'

export const Root = styled(Link)`
  padding: 10px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  background: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  border: 2px solid ${({ theme }) => theme.colors.borderCard};
  text-align: center;
  position: relative;
`

export const Logo = styled(Avatar).attrs({
  size: 44
})`
  margin-bottom: 10px;
`

export const Title = styled.div`
  ${({ theme }) => theme.typography.text_14_20};
  font-weight: bold;
`

export const Description = styled(Username)`
  ${({ theme }) => theme.typography.text_12_16};
  color: ${({ theme }) => theme.colors.secondary};
`

export const VerifyIcon = styled(Icon).attrs({
  name: 'check-star'
})`
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 10px;
  right: calc(50% - 32px);
  z-index: 2;
`

export const FollowButton = styled.div`
  margin-top: 15px;
`
