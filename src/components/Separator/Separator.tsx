import { FC } from 'react'
import * as Styled from './styles'

interface SeparatorProps {
  className?: string
}

const Separator: FC<SeparatorProps> = ({ className }) => {
  return <Styled.Root className={className} />
}

export default Separator
