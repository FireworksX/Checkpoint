import React, { FC } from 'react'
import Redirect from 'src/components/Redirect/Redirect'
import { useLinkConfig } from '../widgets/Link/hooks/useLinkConfig'
import { useCurrentUser } from '../hooks/data/useCurrentUser'

export const withValidateUser = (Route: FC) => {
  return () => {
    const { isAuth } = useCurrentUser()
    const [welcomeLink] = useLinkConfig('welcome')

    if (!isAuth) {
      return <Redirect routeName={welcomeLink.link.name} />
    }

    return <Route />
  }
}
