import styled, { css } from 'styled-components'
import IconComp from 'src/components/Icon/Icon'
import Link from 'src/widgets/Link/Link'

export const Root = styled.nav`
  background: ${({ theme }) => theme.colors.backgroundLight};
  width: 100%;
  padding-bottom: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  .navigationActive {
    ${() => css`
      ${Icon} {
        color: ${({ theme }) => theme.colors.primary};
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
  flex-basis: 25%;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 15px 0;
  position: relative;
`

export const Icon = styled(IconComp).attrs({
  width: 28,
  height: 28
})`
  color: ${({ theme }) => theme.colors.textColorDark};
`
