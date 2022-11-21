import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import { LinkProps } from 'src/widgets/Link/Link'

interface CounterCellProps {
  value: ReactNode
  description: ReactNode
  className?: string
  appLinkProps: LinkProps
}

const CounterCell: FC<CounterCellProps> = ({ className, value, description, appLinkProps }) => {
  return (
    <Styled.Root className={className} {...appLinkProps}>
      <Styled.Value>{value}</Styled.Value>
      <Styled.Description>{description}</Styled.Description>
    </Styled.Root>
  )
}

export default CounterCell
