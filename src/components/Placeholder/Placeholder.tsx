import { FC, ReactNode } from 'react'
import * as Styled from './styles'

interface PlaceholderProps {
  icon?: ReactNode
  header?: string
  className?: string
}

const Placeholder: FC<PlaceholderProps> = ({ className, icon, header, children }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Icon>{icon}</Styled.Icon>
      <Styled.Header>{header}</Styled.Header>
      <Styled.Description>{children}</Styled.Description>
    </Styled.Root>
  )
}

export default Placeholder
