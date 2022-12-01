import React from 'react'
import { ThemeProvider } from 'styled-components'
import { light } from 'src/styles/theme'
import ScrollRestorator from '../ScrollRestorator/ScrollRestorator'

const AppHelpers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={light}>
      <ScrollRestorator>{children}</ScrollRestorator>
    </ThemeProvider>
  )
}

export default AppHelpers
