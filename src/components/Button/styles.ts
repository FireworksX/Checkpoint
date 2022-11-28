import styled, { css, CSSProp, DefaultTheme } from 'styled-components'
import Touchable from 'src/components/Touchable/Touchable'
import { ButtonProps } from './Button'
import IconComp from '../Icon/Icon'

interface Props {
  size?: ButtonProps['size']
  stretched?: ButtonProps['stretched']
  mode?: ButtonProps['mode']
  disabled?: ButtonProps['disabled']
  hasContent?: boolean
}

const sizesMap: (theme: DefaultTheme) => Record<NonNullable<Props['size']>, CSSProp> = (theme: DefaultTheme) => ({
  s: css`
    ${theme.typography.text_10_12}
    padding: 4px 5px;

    ${Icon} {
      width: 16px;
      height: 16px;
      margin-right: 5px;
    }
  `,
  m: css`
    ${theme.typography.text_14_20}
    padding: 5px 10px;

    ${Icon} {
      width: 20px;
      height: 20px;
      margin-right: 7px;
    }
  `,
  l: css`
    ${theme.typography.text_16_20}
    padding: 10px 10px;

    ${Icon} {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  `,
  xl: css`
    ${theme.typography.text_18_22}
    padding: 15px 25px;

    ${Icon} {
      width: 28px;
      height: 28px;
      margin-right: 12px;
    }
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
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ size, theme }) => sizesMap(theme)[size || 'm']}
  width: ${({ stretched }) => stretched && '100%'};
  ${({ theme, mode }) => modesMap(theme)[mode || 'primary']}
`

export const Icon = styled(IconComp)<Props>`
  margin-right: ${({ hasContent }) => !hasContent && '0 !important'};
`
