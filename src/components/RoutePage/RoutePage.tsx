import React, { FC } from 'react'
import * as Styled from './styles'

interface RoutePageProps {
  className?: string
}

const RoutePage: FC<RoutePageProps> = ({ className, children }) => {
  return <Styled.Root className={className}>{children}</Styled.Root>
}

export default RoutePage
