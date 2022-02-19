import React from 'react'
import { ThemeProvider } from 'styled-components'
import { light } from 'src/styles/theme'

interface AppHelpersProps {
  className?: string
}

const AppHelpers: React.FC<AppHelpersProps> = ({ className, children }) => {
  return <ThemeProvider theme={light}>{children}</ThemeProvider>
}

export default AppHelpers
