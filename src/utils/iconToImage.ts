import { staticImagesMapKebab } from 'src/data/staticImagesMap'

export const iconToImage = (icon?: string) => icon && staticImagesMapKebab[icon]
