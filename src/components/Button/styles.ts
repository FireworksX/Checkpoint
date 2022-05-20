import styled, { css, DefaultTheme, FlattenInterpolation, ThemedCssFunction } from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import { ButtonProps } from './Button'
import { rgbToRgba } from 'src/styles/theme/baseStyleds'

interface Props {
  size?: ButtonProps['size']
  stretched?: ButtonProps['stretched']
  color?: ButtonProps['color']
}

const sizesMap: Record<NonNullable<Props['size']>, string> = {
  s: `padding: 3px 16px;`,
  m: `padding: 5px 16px;`,
  l: `padding: 10px 16px;`
}

const colorsMap: (
  theme: DefaultTheme
) => Record<NonNullable<Props['color']>, any> = theme => ({
  dark: css`
    background: ${theme.colors.basicBlack};
    color: ${theme.colors.basicWhite};

    &:active {
      background: ${rgbToRgba(theme.colors.basicBlack, 0.9)};
    }
  `,
  secondary: css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.basicWhite};

    &:active {
      background: ${rgbToRgba(theme.colors.secondary, 0.9)};
    }
  `
})

export const Root = styled(Touchable).attrs({ tagName: 'button' })<Props>`
  ${({ theme }) => theme.typography.text_14_24}
  text-align: center;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  outline: none !important;
  font-weight: 500;
  border: none;
  ${({ size }) => sizesMap[size || 's']}
  width: ${({ stretched }) => stretched && '100%'};
  ${({ theme, color }) => colorsMap(theme)[color || 'dark']}
`
