// базовые стили для всех тем
import typography from './typography'
import {DefaultTheme} from "styled-components";

const colorEffects = (colors: DefaultTheme['colors']) => ({
  gradient: `linear-gradient ${colors.background} 0%, ${colors.background} 100%`,
  gradientScroll: `linear-gradient(
    to left,
    ${colors.background} 0%,
    rgba(250, 250, 250, 0) 100%
  )`,
  gradientScrollWhite: `linear-gradient(
    to left,
    ${colors.background} 0%,
    rgba(250, 250, 250, 0) 100%
  )`,
  gradientScrollWhiteRight: `linear-gradient(
    to right,
    ${colors.background} 0%,
    rgba(250, 250, 250, 0) 100%
  )`,
  gradientRight: `linear-gradient(to right, ${colors.background} 20%, rgba(255, 255, 255, 0));`
})

const baseStyles = {
  links: {
    linkDecoration: 'none',
    linkHoverDecoration: 'none'
  },
  shadows: {
    shadowBasic: '0 1px 2px 0 rgba(9, 10, 11, 0.08)',
    shadowBig: '0px 30px 40px 0px rgba(9, 10, 11, 0.1)',
    shadowSecondary: '0 0 1px 0 rgba(9, 10, 11, 0.08), 0 3px 4px 0 rgba(9, 10, 11, 0.1)',
    shadowHover: '0 0 2px -1px rgba(9, 10, 11, 0.2), 0 30px 40px 0 rgba(9, 10, 11, 0.1)'
  },
  radius: {
    radiusMain: '20px',
    radiusSecond: '10px',
  },
  paddings: {
    gutterMobile: '15px',
    gutterDesktop: '30px',
    gutterRow: '12px',
    gutterMobileInset: '10px',
    gutterDesktopInset: '15px',
    gutterRowInsetMobile: '10px',
    gutterRowInsetDesktop: '15px'
  },
  sizes: {
    headerHeight: 50,
    layoutLeft: 270,
    layoutCenter: 760,
    layoutRight: 410
  }
}

const animation = {
  transitionDuration: '0.25s'
}

export const getBaseVariables = (colors: DefaultTheme['colors']) => ({
  colorEffects: colorEffects(colors),
  typography,
  baseStyles,
  animation
})
