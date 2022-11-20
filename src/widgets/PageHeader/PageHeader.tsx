import React, { FC, ReactNode } from 'react'
import * as Styled from './styles'

interface PageHeaderProps {
  description?: ReactNode
  left?: ReactNode
  right?: ReactNode
  className?: string
}

const PageHeader: FC<PageHeaderProps> = ({ className, children, description, left, right }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Left>{left}</Styled.Left>
      <Styled.Center>
        <Styled.Description>{description}</Styled.Description>
        {children}
      </Styled.Center>
      <Styled.Right>{right}</Styled.Right>
    </Styled.Root>
  )
}

export default PageHeader
