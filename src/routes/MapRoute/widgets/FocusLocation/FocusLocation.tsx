import { FC } from 'react'
import * as Styled from './styles'

interface FocusLocationProps {
  className?: string
}

const FocusLocation: FC<FocusLocationProps> = ({ className }) => {
  return <Styled.Root className={className}>Phuket</Styled.Root>
}

export default FocusLocation
