import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'
import Avatar from 'src/widgets/Avatar/Avatar'

export const Root = styled(Touchable)`
  display: flex;
  align-items: center;
  padding: 5px 0;
`

export const UserAvatar = styled(Avatar)`
  margin-right: 10px;
`

export const Name = styled.div`
  ${({ theme }) => theme.typography.text_14_20}
  font-weight: bold;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_14_20}
`

export const Time = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 7px;
`

export const Aside = styled(CommonLogo).attrs({ size: 60 })`
  margin-left: auto;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
`
