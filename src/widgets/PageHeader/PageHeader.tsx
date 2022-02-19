import React, { FC } from 'react'
import * as Styled from './styles'

interface PageHeaderProps {
  className?: string
}

const PageHeader: FC<PageHeaderProps> = ({ className, children }) => {
  return (
    <Styled.Root className={className}>
      {children}
    </Styled.Root>
  )
}

export default PageHeader
