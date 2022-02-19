import Touchable from 'src/components/Touchable/Touchable'
import styled from 'styled-components'
import CommonLogo from 'src/components/CommonLogo/CommonLogo'
import Link from 'src/widgets/Link/Link'
import { buildName } from 'src/utils/buildName'
import { ROUTE_NAMES } from 'src/router/constants'
import { mixinEllipsis } from '../../styles/mixins'

export const Root = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr auto;
  grid-gap: 10px;
  background: ${({ theme }) => theme.colors.iconWhite};
  padding: 7px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Time = styled.div`
  ${({ theme }) => theme.typography.text_12_16}
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
`

export const Teams = styled(Link)``

export const TeamRow = styled.div`
  ${({ theme }) => theme.typography.text_14_20}
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Logo = styled(CommonLogo).attrs({ size: 24 })`
  margin-right: 10px;
`

export const Name = styled.div`
  ${mixinEllipsis}
`

export const Score = styled.div`
  margin-left: auto;
`
