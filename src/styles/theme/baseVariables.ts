// базовые стили для всех тем
import typography from './typography'

const colors = {
  backdrop: 'rgba(9, 10, 11, 0.7)',
  colorPage: 'rgb(243, 243, 244)',
  background: 'rgb(255, 255, 255)',
  backgroundAmber: 'rgb(247, 181, 0)',
  backgroundWhite: 'rgb(240, 242, 245)',
  backgroundSecondary: 'rgb(250, 250, 250)',

  border: 'rgb(229, 230, 233)',
  borderHover: 'rgb(105, 168, 99)',

  skeletonDark: 'rgb(229, 230, 233)',
  skeleton: 'rgb(229, 230, 233)',
  skeletonLight: 'rgb(242, 243, 244)',

  ratingFive: 'rgb(118, 169, 099)',
  ratingFour: 'rgb(183, 213, 050)',
  ratingThree: 'rgb(255, 216, 049)',
  ratingTwo: 'rgb(255, 177, 052)',
  ratingOne: 'rgb(254, 139, 088)',

  sidebarBlock: 'rgba(126, 131, 146, 0.05)',
  sidebarHover: 'rgba(126, 131, 146, 0.15)',

  statusSuccessBg: 'rgb(243, 248, 241)',
  statusSuccessBgDark: 'rgba(118, 169, 99, .15)',
  statusSuccessText: 'rgb(118, 169, 099)',
  statusDangerBg: 'rgb(254, 237, 236)',
  statusDangerText: 'rgb(241, 76, 69)',
  statusDefaultBg: 'rgb(242, 243, 244)',
  statusDefaultBgDark: 'rgb(236, 237, 239)',
  statusDefaultText: 'rgb(126, 131, 146)',
  statusPrimaryBg: 'rgb(237, 244, 252)',
  statusPrimaryBgDark: 'rgba(74, 144, 226, .15)',
  statusPrimaryText: 'rgb(74, 144, 226)',

  radialChartSuccess: 'rgb(118, 169, 99)',
  radialChartDanger: 'rgb(241, 76, 69)',
  radialChartDefault: 'rgb(126, 131, 146)'
}

const colorEffects = {
  gradient: `linear-gradient ${colors.backgroundWhite} 0%, ${colors.background} 100%`,
  gradientScroll: `linear-gradient(
    to left,
    ${colors.background} 0%,
    rgba(250, 250, 250, 0) 100%
  )`,
  gradientScrollWhite: `linear-gradient(
    to left,
    ${colors.backgroundWhite} 0%,
    rgba(250, 250, 250, 0) 100%
  )`,
  gradientScrollWhiteRight: `linear-gradient(
    to right,
    ${colors.backgroundWhite} 0%,
    rgba(250, 250, 250, 0) 100%
  )`,
  gradientRight: `linear-gradient(to right, ${colors.backgroundWhite} 20%, rgba(255, 255, 255, 0));`
}

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
    radiusMain: '10px',
    radiusSecond: '2px'
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

const baseVariables = {
  colors: {
    ...colors,
    ...colorEffects
  },
  typography,
  baseStyles,
  animation
}

export { baseVariables }
