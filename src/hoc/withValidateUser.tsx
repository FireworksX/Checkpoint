import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'
import Redirect from 'src/components/Redirect/Redirect'
import { authUserIsAuthSelector } from 'src/store/userStore/selectors/authUserIsAuthSelector'
import { useLinkConfig } from '../widgets/Link/hooks/useLinkConfig'

export const withValidateUser = (Route: FC) => {
  return () => {
    const isAuth = useRecoilValue(authUserIsAuthSelector)
    const welcomeLink = useLinkConfig('welcome')

    if (!isAuth) {
      return <Redirect routeName={welcomeLink.link.name} />
    }

    return <Route />
  }
}
