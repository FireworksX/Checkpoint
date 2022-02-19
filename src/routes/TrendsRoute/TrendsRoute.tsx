import { FC } from 'react'
import * as Styled from './styles'
import { ROUTE_NAMES } from 'src/router/constants'
import { route } from 'src/hoc/route'

interface TrendsRouteProps {
  className?: string
}

const TrendsRoute: FC<TrendsRouteProps> = ({ className }) => {
  return <Styled.Root className={className}>TrendsRoute</Styled.Root>
}

export default route(TrendsRoute, ROUTE_NAMES.trends)
