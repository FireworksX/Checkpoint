import React, { FC } from 'react'
import AppHelpers from 'src/widgets/AppHelpers/AppHelpers'
import * as Styled from './styles'
import { GlobalStyle } from 'src/styles/GlobalStyle'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import 'src/utils/dayjs-timezone'
import { useStore } from 'src/store'

const RootRoute: FC = ({ children }) => {
  const { hasNavigation } = useStore.uiStore()

  return (
    <AppHelpers>
      <GlobalStyle />
      <Styled.Root>
        {children}
        <Styled.Navigation hasNavigation={hasNavigation} />
      </Styled.Root>
    </AppHelpers>
  )
}

export default route(RootRoute, ROUTE_NAMES.root)
