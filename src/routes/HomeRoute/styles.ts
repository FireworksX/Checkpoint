import styled, { css } from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import Link from 'src/widgets/Link/Link'

interface Props {
  isCreation?: boolean
}

export const Root = styled.div``

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

export const CreateButton = styled(Touchable)<Props>`
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
