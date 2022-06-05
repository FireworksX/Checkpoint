import styled from 'styled-components'
import Link from 'src/widgets/Link/Link'
import Avatar from 'src/widgets/Avatar/Avatar'
import Icon from '../Icon/Icon'

export const Root = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;
`

export const AvatarComponent = styled(Avatar).attrs({
  size: 44
})`
  margin-right: 15px;
`

export const Title = styled.div`
  ${({ theme }) => theme.typography.text_16_20};
  font-weight: bold;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_12_16};
  color: ${({ theme }) => theme.colors.secondary};
`

export const VerifyIcon = styled(Icon).attrs({
  name: 'check-star'
})`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 10px;
`
