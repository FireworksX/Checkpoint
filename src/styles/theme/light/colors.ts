// light theme colors

const baseColors = {
  basicWhite: 'rgb(255, 255, 255)',
  basicBlack: 'rgb(41, 41, 41)',

  primary: 'rgb(0, 51, 255)',
  primaryHover: 'rgb(98, 145, 80)',
  primaryPress: 'rgb(78, 119, 65)',
  primaryDisable: 'rgb(208, 226, 202)',
  primaryBg: 'rgb(227, 234, 255)',

  secondary: 'rgb(126, 131, 146)',
  secondaryHover: 'rgb(84, 88, 99)',
  secondaryPress: 'rgb(67, 69, 77)',
  secondaryDisable: 'rgb(229, 230, 233)',
  secondaryBg: 'rgb(242, 243, 244)',

  accentBlue: 'rgb(74, 144, 226)',
  accentBlueBg: 'rgb(237, 244, 252)',

  accentRed: 'rgb(241, 76, 69)',
  accentRedBg: 'rgb(254, 237, 236)',
  accentRedHover: 'rgb(214, 72, 66)',
  accentRedPress: 'rgb(167, 57, 51)',
  accentRedDisable: 'rgb(226, 202, 202)',

  accentOrange: 'rgb(255, 152, 0)',
  accentOrangeBg: 'rgb(255, 247, 235)',
  orange: 'rgb(243, 112, 33)',
  orangeLight: 'rgb(255, 139, 35)',
  orangeDark: 'rgb(207, 094, 26)',

  accentAmber: 'rgb(247, 181, 0)',
  accentAmberBg: 'rgb(255, 250, 235)',

  accentGray: 'rgb(126, 131, 146)',
  accentGrayLight: 'rgb(203, 205, 211)',

  badgeRatingAtp: 'rgb(1,40,102)',
  badgeRatingWta: 'linear-gradient(269deg, rgb(73,49,135) 0%, rgb(203,22,91) 100%)'
}

const icons = {
  iconBasic: 'rgb(203, 205, 211)',
  iconSecondary: `${baseColors.secondary}`,
  iconWhite: `${baseColors.basicWhite}`,
  iconHover: `${baseColors.primary}`
}

const text = {
  textColor: `${baseColors.basicBlack}`,
  textPrimary: 'rgb(126, 131, 146)',
  textWhite: `${baseColors.basicWhite}`
}

const links = {
  linkColor: `${text.textColor}`,
  linkHover: `${baseColors.primaryHover}`
}

const colors = {
  ...baseColors,
  ...icons,
  ...text,
  ...links
}

export default colors
