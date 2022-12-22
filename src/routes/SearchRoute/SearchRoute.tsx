import { FC } from 'react'
import * as Styled from './styles'
import {route} from "../../hoc/route";
import {ROUTE_NAMES} from "../../router/constants";

interface SearchRouteProps {
  className?: string
}

const SearchRoute: FC<SearchRouteProps> = ({ className }) => {
  return <Styled.Root className={className}>SearchRoute</Styled.Root>
}

export default route(SearchRoute, ROUTE_NAMES.search)
