import colors from './colors'
import { getBaseVariables } from '../baseVariables'

const baseVariables = getBaseVariables(colors)

export default {
  colors,
  ...baseVariables
}
