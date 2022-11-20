import { FC } from 'react'
import * as Styled from './styles'

interface HashtagCellProps {
  className?: string
  isActive?: boolean
}

const HashtagCell: FC<HashtagCellProps> = ({ className, children, isActive }) => {
  return (
    <Styled.Root className={className} isActive={isActive}>
      # {children}
    </Styled.Root>
  )
}

export default HashtagCell
