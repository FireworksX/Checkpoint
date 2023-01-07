import 'styled-components'
import {CSSProp} from "styled-components";

type TypographySizeType = {
  fontSize: string
  lineHeight: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryActive: string
      primaryBg: string
      primaryDisabled: string

      secondary: string
      secondaryActive: string
      secondaryBg: string
      secondaryDisabled: string

      secondaryLight: string
      secondaryLightActive: string
      secondaryLightBg: string
      secondaryLightDisabled: string

      textColorLight: string
      textColorDark: string

      background: string
      backgroundLight: string
      backgroundCard: string
      backgroundDark: string

      border: string
      borderLight: string
      borderCard: string

      accentRed: string
      accentRedBg: string
      accentGreen: string
      accentGreenBg: string
    }
    typography: {
      fontFamily: string
      textEllipsis: CSSProp

      text_32_38: TypographySizeType
      text_26_30: TypographySizeType
      text_20_24: TypographySizeType
      text_18_22: TypographySizeType
      text_16_20: TypographySizeType
      text_14_24: TypographySizeType
      text_14_20: TypographySizeType
      text_12_16: TypographySizeType
      text_11_16: TypographySizeType
      text_11_12: TypographySizeType
      text_10_12: TypographySizeType
      text_9_9: TypographySizeType
    }
    baseStyles: {
      links: {
        linkDecoration: string
        linkHoverDecoration: string
      }
      shadows: {
        shadowBasic: string
        shadowBig: string
        shadowSecondary: string
        shadowHover: string
      }
      radius: {
        radiusMain: string
        radiusSecond: string
        radiusSmall: string
      }
      paddings: {
        gutterMobile: string
        gutterDesktop: string
        gutterRow: string
        gutterMobileInset: string
        gutterDesktopInset: string
        gutterRowInsetMobile: string
        gutterRowInsetDesktop: string
      }
      sizes: {
        headerHeight: number
        layoutLeft: number
        layoutCenter: number
        layoutRight: number
      }
    }
    animation: {
      transitionDuration: string
    }
  }
}
