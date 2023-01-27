
export const rgbToRgba = (rgb: string, alpha = 1): string => rgb.replace(')', `, ${alpha})`).replace('rgb', 'rgba')

export const pxToValue = (value: string): number => +value.replace(/px/g, '')

