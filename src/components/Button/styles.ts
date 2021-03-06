import styled, { css, DefaultTheme, FlattenInterpolation, ThemedCssFunction } from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import { ButtonProps } from './Button'
import { rgbToRgba } from 'src/styles/theme/baseStyleds'

interface Props {
  size?: ButtonProps['size']
  stretched?: ButtonProps['stretched']
  color?: ButtonProps['color']
  mode?: ButtonProps['mode']
  disabled?: ButtonProps['disabled']
}

const sizesMap: Record<NonNullable<Props['size']>, string> = {
  s: `padding: 3px 16px;`,
  m: `padding: 5px 16px;`,
  l: `padding: 10px 16px;`
}

const colorsMap = (theme: DefaultTheme) => ({
  accent: {
    color: theme.colors.primary,
    active: theme.colors.primaryPress,
    disabled: theme.colors.primaryDisable
  },

  positive: {
    color: theme.colors.statusSuccessText,
    active: rgbToRgba(theme.colors.statusSuccessText, 0.9)
  },

  negative: {
    color: theme.colors.statusDangerText,
    active: rgbToRgba(theme.colors.statusDangerText, 0.9)
  },

  neutral: {
    color: theme.colors.textColor,
    active: rgbToRgba(theme.colors.primaryBg, 0.9)
  }
})

const modesMap = (theme: DefaultTheme, colorMode: Props['color']) => {
  const { color, active, disabled } = colorsMap(theme)[colorMode || 'accent']

  return {
    primary: css`
      background-color: ${color};
      color: ${theme.colors.textWhite};

      &:active {
        background-color: ${active};
      }
    `,
    secondary: css`
      background-color: ${theme.colors.secondaryLight};
      color: ${color};

      &:active {
        background-color: ${theme.colors.secondaryLightPress};
      }

      &:disabled {
        color: ${disabled};
      }
    `,

    tertiary: css`
      background-color: transparent;
      color: ${color};

      &:active {
        background-color: transparent;
      }
    `,

    outline: ``
  }
}

export const Root = styled(Touchable).attrs({ tagName: 'button' })<Props>`
  ${({ theme }) => theme.typography.text_14_24}
  text-align: center;
  border-radius: ${({ theme }) => theme.baseStyles.radius.radiusMain};
  outline: none !important;
  font-weight: 500;
  border: none;
  ${({ size }) => sizesMap[size || 's']}
  width: ${({ stretched }) => stretched && '100%'};
  ${({ theme, mode, color }) => modesMap(theme, color)[mode || 'primary']}
`
