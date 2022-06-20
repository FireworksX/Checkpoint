import styled, { css } from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import Link from 'src/widgets/Link/Link'
import PageHeader from 'src/widgets/PageHeader/PageHeader'

interface Props {
  isCreation?: boolean
}

export const Root = styled.div``

export const Header = styled(PageHeader)`
  position: fixed;
  top: 0;
  z-index: 2;
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.background}, transparent);
  height: 70px;
`

export const asideButtonCss = css`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  color: ${({ theme }) => theme.colors.basicWhite};
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  z-index: 2;
`

export const CreateButton = styled(Link)<Props>`
  ${asideButtonCss}
  bottom: 100px;
  left: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  background: ${({ theme, isCreation }) => (isCreation ? theme.colors.accentRed : theme.colors.primary)};
  ${({ isCreation }) => isCreation && `transform: rotate(45deg);`}
`

export const SubmitButton = styled(Link)`
  ${asideButtonCss}
  bottom: 100px;
  right: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  background: ${({ theme }) => theme.colors.statusSuccessText};
`

export const ZoomControl = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  z-index: 2;
`

export const ZoomButton = styled(Touchable)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.basicWhite};
  border-radius: 50%;
  margin-bottom: 10px;
  box-shadow: ${({ theme }) => theme.baseStyles.shadows.shadowBig};

  &:last-child {
    margin-bottom: 0;
  }
`
