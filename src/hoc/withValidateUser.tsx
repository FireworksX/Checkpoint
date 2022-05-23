import React, { FC } from 'react'
import useCookies from 'src/hooks/useCookies'
import Redirect from 'src/components/Redirect/Redirect'
import { buildName } from 'src/utils/buildName'

export const withValidateUser = (Route: FC) => {
  return () => {
    const [accessToken] = useCookies('accessToken')

    if (!accessToken) {
      return <Redirect routeName={buildName('welcome')} />
    }

    return <Route />
  }
}
