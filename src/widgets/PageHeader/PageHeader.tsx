import React, { FC, ReactNode } from 'react'
import * as Styled from './styles'

interface PageHeaderProps {
  left?: ReactNode
  right?: ReactNode
  className?: string
}

const PageHeader: FC<PageHeaderProps> = ({ className, children, left, right }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Left>{left}</Styled.Left>
      <Styled.Center>{children}</Styled.Center>
      <Styled.Right>{right}</Styled.Right>
    </Styled.Root>
  )
}

export default PageHeader
