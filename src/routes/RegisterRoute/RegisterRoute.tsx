import { FC } from 'react'
import * as Styled from './styles'
import {ROUTE_NAMES} from "src/router/constants";
import {route} from "src/hoc/route";

interface RegisterRouteProps {
  className?: string
}

const RegisterRoute: FC<RegisterRouteProps> = ({ className }) => {
  return <Styled.Root className={className} safeAreaBottom>RegisterRoute</Styled.Root>
}

export default route(RegisterRoute, ROUTE_NAMES.register)
