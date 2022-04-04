import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import AppHelpers from 'src/widgets/AppHelpers/AppHelpers'
import * as Styled from './styles'
import { GlobalStyle } from 'src/styles/GlobalStyle'
import { route } from 'src/hoc/route'
import { ROUTE_NAMES } from 'src/router/constants'
import 'src/utils/dayjs-timezone'
import { hasNavigationAtom } from 'src/store/uiStore'

const RootRoute: FC = ({ children }) => {
  const hasNavigation = useRecoilValue(hasNavigationAtom)

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
