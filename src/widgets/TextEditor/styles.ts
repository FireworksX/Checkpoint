import styled, { DefaultTheme } from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize';
import TextEditorCell from "./components/TextEditorCell/TextEditorCell";

interface Props {
  fontSize?: 's' | 'm' | 'l'
}

export const Root = styled.div`
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusSecond};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
`

export const Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 7px ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  display: flex;
  align-items: center;
`

export const HeaderCell = styled(TextEditorCell)`
  margin-right: 10px;
`

const typographyBySize = (theme: DefaultTheme) => ({
  s: theme.typography.text_16_20,
  m: theme.typography.text_18_22,
  l: theme.typography.text_20_24,
})

export const Body = styled(TextareaAutosize)<Props>`
  border: none;
  padding: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  display: block;
  width: 100%;
  outline: none;
  resize: none;
  min-height: 120px;
  ${({ theme, fontSize }) => typographyBySize(theme)[fontSize || 'm']};
`
