import styled from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'
import Icon from 'src/components/Icon/Icon'
import { mixinEllipsis } from 'src/styles/mixins'
import LogosStack from 'src/components/LogosStack/LogosStack'

export const Root = styled(Touchable)`
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const League = styled.div`
  ${({ theme }) => theme.typography.text_12_16}
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

export const LeagueText = styled.span`
  ${mixinEllipsis}
`

export const LeagueIcon = styled(Icon).attrs({
  width: 12,
  height: 12
})`
  margin-right: 5px;
  min-width: 12px;
`

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`

export const Logos = styled(LogosStack).attrs({
  size: 24,
  withPadding: true
})``

export const Date = styled.div`
  ${({ theme }) => theme.typography.text_12_16}
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textColor};
  text-align: right;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Badge = styled.div`
  ${({ theme }) => theme.typography.text_11_16}
  font-weight: 700;
  background: ${({ theme }) => theme.colors.iconBasic};
  color: ${({ theme }) => theme.colors.basicWhite};
  padding: 2px 5px;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  margin-bottom: 3px;
  min-width: 25px;
  text-align: center;
  text-transform: uppercase;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Team = styled.div`
  ${({ theme }) => theme.typography.text_14_24}
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.textColor};

  &:last-child {
    margin-bottom: 0;
  }
`

export const Live = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`

export const LiveTop = styled.div`
  ${({ theme }) => theme.typography.text_12_16}
  font-weight: 700;
  background: ${({ theme }) => theme.colors.accentRed};
  color: ${({ theme }) => theme.colors.basicWhite};
  padding: 3px 4px;
  min-width: 35px;
  text-align: center;
  border-radius: ${({ theme }) => `${theme.baseStyles.radius.radiusMain} ${theme.baseStyles.radius.radiusMain} 0 0`};
`

export const LiveBottom = styled.div`
  ${({ theme }) => theme.typography.text_12_16}
  font-weight: 700;
  background: ${({ theme }) => theme.colors.basicWhite};
  color: ${({ theme }) => theme.colors.accentRed};
  padding: 3px 4px;
  width: 100%;
  text-align: center;
  border-radius: ${({ theme }) => `0 0 ${theme.baseStyles.radius.radiusMain} ${theme.baseStyles.radius.radiusMain}`};
`
