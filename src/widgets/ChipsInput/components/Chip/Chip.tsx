import { FC, ReactNode } from 'react'
import * as Styled from './styles'

interface ChipProps {
  className?: string
  children?: ReactNode
}

const Chip: FC<ChipProps> = ({ className, children }) => {
  return <Styled.Root className={className}>{children}</Styled.Root>
}

export default Chip
