import { baseVariables } from 'src/styles/theme/baseVariables'
import colors from './colors'
import { DefaultTheme } from 'styled-components'

const variables: DefaultTheme = {
  ...baseVariables,
  colors: {
    ...baseVariables.colors,
    ...colors
  }
}

export default variables
