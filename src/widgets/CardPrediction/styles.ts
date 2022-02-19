import styled from 'styled-components'
import Icon, { IconProps } from 'src/components/Icon/Icon'
import Link, { LinkProps } from 'src/widgets/Link/Link'
import { mixinEllipsis } from 'src/styles/mixins'

export const Wrapper = styled(Link)<LinkProps>`
  display: block;
  padding: 12px;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 500;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowBasic};
  min-width: 236px;
`

export const TopBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.typography.text_14_20};
`

export const Date = styled.span`
  align-self: center;
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.statusDefaultText};
`

export const Time = styled.span`
  align-self: center;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.basicBlack};
`

export const LeagueBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  padding-left: 4px;
  ${({ theme }) => theme.typography.text_11_12};
`

export const CountryTitle = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  white-space: nowrap;
`

export const LeagueTitle = styled.div`
  color: ${({ theme }) => theme.colors.basicBlack};
  ${mixinEllipsis}
`

export const DotElement = styled.span`
  background: ${({ theme }) => theme.colors.secondaryDisable};
  height: 4px;
  width: 4px;
  margin: 0 5px;
  border-radius: 50%;
`

export const TeamsBlock = styled.div`
  padding: 14px 4px 14px;
  color: ${({ theme }) => theme.colors.basicBlack};
  ${({ theme }) => theme.typography.text_14_20};
  & > div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

export const MarkBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  transition: ${({
    theme
  }) => `color ${theme.animation.transitionDuration}, background-color ${theme.animation.transitionDuration},
    border ${theme.animation.transitionDuration}`};
  padding: 0 2px 0 0;
  height: 26px;
  min-width: 26px;
  color: ${({ theme }) => theme.colors.basicBlack};
  ${({ theme }) => theme.typography.text_11_12};
  background: ${({ theme }) => theme.colors.basicWhite};
  border-radius: 2px;
  & > span {
    padding-top: 2px;
    padding-left: 10px;
  }
`

export const ToPredictionBtn = styled.div`
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 9px 2px 9px 12px;
  position: relative;
  border-radius: 2px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  color: ${({ theme }) => theme.colors.secondary};
  transition: ${({
    theme
  }) => `color ${theme.animation.transitionDuration}, background-color ${theme.animation.transitionDuration},
    border ${theme.animation.transitionDuration}`};
  ${({ theme }) => theme.typography.text_11_12};

  &:active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.basicWhite};
    & > ${MarkBlock} {
      background: ${({ theme }) => theme.colors.primaryHover};
      color: ${({ theme }) => theme.colors.basicWhite};
    }
  }
`

export const ArrowIcon = styled(Icon)<IconProps>`
  transition: ${({
    theme
  }) => `color ${theme.animation.transitionDuration}, background-color ${theme.animation.transitionDuration},
    border ${theme.animation.transitionDuration}`};
  margin-left: 4px;
  margin-right: 2px;
  color: ${({ theme }) => theme.colors.accentGrayLight};
  ${ToPredictionBtn}:hover > & {
    color: ${({ theme }) => theme.colors.basicWhite};
  }
`

export const FingerIcon = styled(Icon)<IconProps>`
  margin-left: 8px;
  margin-right: -4px;
  color: ${({ theme }) => theme.colors.backgroundAmber};
`

export const FireIcon = styled(Icon)<IconProps>`
  color: ${({ theme }) => theme.colors.statusDangerText};
  margin-left: 8px;
  margin-right: -4px;
`
