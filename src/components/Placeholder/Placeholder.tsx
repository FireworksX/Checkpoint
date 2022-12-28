import { FC, ReactNode } from 'react'
import * as Styled from './styles'

export interface PlaceholderProps {
  icon?: ReactNode
  actions?: ReactNode | ReactNode[]
  header?: ReactNode
  className?: string
}

const Placeholder: FC<PlaceholderProps> = ({ className, icon, actions, header, children }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Icon>{icon}</Styled.Icon>
      <Styled.Header>{header}</Styled.Header>
      <Styled.Description>{children}</Styled.Description>
      <Styled.Actions>{actions}</Styled.Actions>
    </Styled.Root>
  )
}

export default Placeholder
