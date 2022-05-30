import React, { FC } from 'react'
import AppHelpers from 'src/widgets/AppHelpers/AppHelpers'
import * as Styled from './styles'
import { GlobalStyle } from 'src/styles/GlobalStyle'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import 'src/utils/dayjs-timezone'
import { RootRouteHead } from './RootRouteHead'
import { useCurrentUser } from 'src/hooks/data/useCurrentUser'

const RootRoute: FC = ({ children }) => {

  return (
    <AppHelpers>
      <RootRouteHead />
      <GlobalStyle />
      <Styled.Root>{children}</Styled.Root>
    </AppHelpers>
  )
}

export default route(RootRoute, ROUTE_NAMES.root)
