import styled, { css } from 'styled-components'
import IconComp from 'src/components/Icon/Icon'
import Touchable from 'src/components/Touchable/Touchable'
import Link from 'src/widgets/Link/Link'
import Input from '../../components/Input/Input'

interface Props {
  offset?: number
}

export const Root = styled.nav`
  background: ${({ theme }) => theme.colors.basicBlack};
  box-shadow: 0 8px 24px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 12%);
  border-radius: 20px 20px 0 0;
  width: 100%;

  .navigationActive {
    ${() => css`
      ${Icon}, ${Name} {
        color: ${({ theme }) => theme.colors.basicWhite};
      }

      &:before {
        content: '';
        width: 50px;
        height: 37px;
        position: absolute;
        top: 8px;
        left: 50%;
        margin-left: -25px;
        background: ${({ theme }) => theme.colors.secondaryHover};
        border-radius: 10px;
        z-index: -1;
      }
    `}
  }
`

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
`

export const Item = styled(Link).attrs({ activeClassName: 'navigationActive' })`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-basis: 33%;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 20px 0;
  position: relative;
`

export const Icon = styled(IconComp).attrs({
  width: 24,
  height: 24
})`
  color: ${({ theme }) => theme.colors.iconBasic};
`

export const Name = styled.span`
  ${({ theme }) => theme.typography.text_11_12};
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 4px;
`

export const MapHelpers = styled.div`
  display: flex;
  align-items: center;
  padding: 10px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
`

export const SearchInput = styled(Input).attrs({ inputClassName: 'input', placeholder: 'Search your place' })`
  margin-right: 10px;

  .input {
    background: ${({ theme }) => theme.colors.secondaryPress};
    border: none;
    color: ${({ theme }) => theme.colors.textWhite};
  }
`

export const MapFilter = styled(Touchable)`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
