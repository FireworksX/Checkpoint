import React from 'react'
import { ThemeProvider } from 'styled-components'
import { light } from 'src/styles/theme'

const AppHelpers: React.FC = ({ children }) => {
  return <ThemeProvider theme={light}>{children}</ThemeProvider>
}

export default AppHelpers
