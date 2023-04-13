import styled, { DefaultTheme } from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import { ActionSheetItemProps } from './ActionSheetItem'

interface Props {
  mode?: ActionSheetItemProps['mode']
}

const colorsMap = (theme: DefaultTheme) => ({
  destructive: theme.colors.accentRed,
  default: theme.colors.primary
})

export const Root = styled(Touchable)<Props>`
  min-height: 56px;
  background: ${({ theme }) => theme.colors.background};
  padding: 0 ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  ${({ theme }) => theme.typography.text_20_24};
  color: ${({ theme, mode }) => colorsMap(theme)[mode || 'default']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:first-child {
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }

  &:last-child {
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    border-bottom: none;
  }
`
