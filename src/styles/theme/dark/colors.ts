// dark theme colors

const baseColors = {
  basicWhite: 'rgb(255, 255, 255)',
  basicBlack: 'rgb(9, 10, 11)',

  primary: 'rgb(0, 206, 107)',
  primaryHover: 'rgb(0, 219, 114)',
  primaryPress: 'rgb(0, 232, 121)',
  primaryDisable: 'rgb(255, 0, 0)',
  primaryBg: 'rgb(55, 79, 94)',

  secondary: 'rgb(126, 131, 146)',
  secondaryHover: 'rgb(84, 88, 99)',
  secondaryPress: 'rgb(67, 69, 77)',
  secondaryDisable: 'rgb(59, 61, 68)',
  secondaryBg: 'rgb(42, 46, 65)',

  accentBlue: 'rgb(74, 144, 226)',
  accentBlueBg: 'rgb(63, 73, 106)',

  accentRed: 'rgb(229, 115,115)',
  accentRedBg: 'rgb(78, 70, 95)',
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
  accentGrayLight: 'rgb(203, 205, 211)'
}

const icons = {
  iconBasic: 'rgb(127, 131, 148)',
  iconSecondary: `${baseColors.secondary}`,
  iconWhite: `${baseColors.basicWhite}`,
  iconHover: `${baseColors.primary}`
}

const text = {
  textColor: `rgb(187, 190, 205)`,
  textPrimary: 'rgb(126, 131, 146)',
  textWhite: 'rgb(246, 246, 247)'
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

export { colors }
