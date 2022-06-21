import 'styled-components'

type TypographySizeType = {
  fontSize: string
  lineHeight: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gradient: string
      gradientScroll: string
      gradientScrollWhite: string
      gradientScrollWhiteRight: string
      gradientRight: string

      backdrop: string
      colorPage: string
      background: string
      backgroundAmber: string
      backgroundWhite: string
      backgroundSecondary: string

      border: string
      borderHover: string

      skeletonDark: string
      skeleton: string
      skeletonLight: string

      ratingFive: string
      ratingFour: string
      ratingThree: string
      ratingTwo: string
      ratingOne: string

      sidebarBlock: string
      sidebarHover: string

      statusSuccessBg: string
      statusSuccessBgDark: string
      statusSuccessText: string
      statusDangerBg: string
      statusDangerText: string
      statusDefaultBg: string
      statusDefaultBgDark: string
      statusDefaultText: string
      statusPrimaryBg: string
      statusPrimaryBgDark: string
      statusPrimaryText: string

      radialChartSuccess: string
      radialChartDanger: string
      radialChartDefault: string

      basicWhite: string
      basicBlack: string

      primary: string
      primaryHover: string
      primaryPress: string
      primaryDisable: string
      primaryBg: string

      secondary: string
      secondaryHover: string
      secondaryPress: string
      secondaryDisable: string
      secondaryBg: string

      secondaryLight: string
      secondaryLightPress: string
      secondaryLightDisable: string
      secondaryLightBg: string

      accentBlue: string
      accentBlueBg: string

      accentRed: string
      accentRedBg: string
      accentRedHover: string
      accentRedPress: string
      accentRedDisable: string

      accentOrange: string
      accentOrangeBg: string
      orange: string
      orangeLight: string
      orangeDark: string

      accentAmber: string
      accentAmberBg: string

      accentGray: string
      accentGrayLight: string

      iconBasic: string
      iconSecondary: string
      iconWhite: string
      iconHover: string

      textColor: string
      textPrimary: string
      textWhite: string

      linkColor: string
      linkHover: string

      badgeRatingAtp: string
      badgeRatingWta: string
    }
    typography: {
      fontFamily: string

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
