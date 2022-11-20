import styled, {css, CSSProp, DefaultTheme} from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import { ButtonProps } from './Button'

interface Props {
  size?: ButtonProps['size']
  stretched?: ButtonProps['stretched']
  mode?: ButtonProps['mode']
  disabled?: ButtonProps['disabled']
}

const sizesMap: (theme: DefaultTheme) => Record<NonNullable<Props['size']>, CSSProp> = (theme: DefaultTheme) => ({
  s: css`
    ${theme.typography.text_10_12}
    padding: 4px 5px;
  `,
  m: css`
    ${theme.typography.text_14_20}
    padding: 5px 10px;
  `,
  l: css`
    ${theme.typography.text_16_20}
    padding: 10px 10px;
  `,
  xl: css`
    ${theme.typography.text_18_22}
    padding: 15px 25px;
  `
})

const modesMap = (theme: DefaultTheme) => {
  return {
    primary: css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.textColorLight};

      &:active {
        background-color: ${theme.colors.primaryActive};
      }

      &:disabled {
        color: ${theme.colors.primaryDisabled};
      }
    `,
    secondary: css`
      background-color: ${theme.colors.primaryDisabled};
      color: ${theme.colors.primaryActive};

      &:disabled {
        color: ${theme.colors.primaryDisabled};
      }
    `,

    tertiary: css`
      background-color: transparent;
      color: ${theme.colors.primary};

      &:active {
        background-color: transparent;
      }
    `,

    outline: `
      background-color: transparent;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};

      &:active {
        background-color: transparent;
      }`
  }
}

export const Root = styled(Touchable).attrs({ tagName: 'button' })<Props>`
  text-align: center;
  border-radius: 50px;
  outline: none !important;
  font-weight: 500;
  border: none;
  ${({ size, theme }) => sizesMap(theme)[size || 'm']}
  width: ${({ stretched }) => stretched && '100%'};
  ${({ theme, mode }) => modesMap(theme)[mode || 'primary']}
`
