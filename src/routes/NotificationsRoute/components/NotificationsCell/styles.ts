import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'

export const Root = styled(Touchable)`
  display: flex;
  align-items: center;
`

export const Avatar = styled(CommonLogo)`
  border-radius: 50%;
  margin-right: 20px;
`

export const Name = styled.div`
  ${({ theme }) => theme.typography.text_14_24}
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
`

export const Description = styled.div`
  ${({ theme }) => theme.typography.text_14_20}
  color: ${({ theme }) => theme.colors.textColor};
`

export const Time = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 10px;
`

export const Aside = styled(CommonLogo).attrs({ size: 60 })`
  margin-left: auto;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
`
