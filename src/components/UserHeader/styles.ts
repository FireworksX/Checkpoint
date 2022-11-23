import styled from 'styled-components'
import AvatarComp from '../../widgets/Avatar/Avatar'
import Icon from "../Icon/Icon";

export const Root = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled(AvatarComp)`
  margin-right: 7px;
`

export const Head = styled.div`
  ${({ theme }) => theme.typography.text_16_20}
  font-weight: bold;
  display: flex;
  align-items: center;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_12_16}
  color: ${({ theme }) => theme.colors.secondary};
`

export const VerifyIcon = styled(Icon).attrs({
    name: 'check-star'
})`
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.primary};
`
