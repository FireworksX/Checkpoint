import { FC } from 'react'
import * as Styled from './styles'
import { route } from '../../hoc/route'
import { ROUTE_NAMES } from '../../router/constants'

interface LocationViewProps {
  className?: string
}

const LocationView: FC<LocationViewProps> = ({ className }) => {
  return <Styled.Root className={className}>LocationView</Styled.Root>
}

export default route(LocationView, ROUTE_NAMES.locationView)
