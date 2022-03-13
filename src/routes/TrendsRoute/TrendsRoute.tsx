import { FC } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'
import { withValidateUser } from 'src/hoc/withValidateUser'

interface TrendsRouteProps {
  className?: string
}

const TrendsRoute: FC<TrendsRouteProps> = ({ className }) => {
  return <Styled.Root className={className}>TrendsRoute</Styled.Root>
}

export default route(withValidateUser(TrendsRoute), ROUTE_NAMES.trends)
