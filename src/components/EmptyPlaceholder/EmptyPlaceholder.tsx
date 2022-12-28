import { FC } from 'react'
import * as Styled from './styles'
import { PlaceholderProps } from '../Placeholder/Placeholder'

interface EmptyPlaceholderProps extends Pick<PlaceholderProps, 'header'> {
  className?: string
}

const EmptyPlaceholder: FC<EmptyPlaceholderProps> = ({ className, children, header }) => {
  return (
    <Styled.Root className={className} header={<Styled.Title>{header}</Styled.Title>}>
      <Styled.Description>{children}</Styled.Description>
    </Styled.Root>
  )
}

export default EmptyPlaceholder
