import React, {ReactNode} from 'react'
import * as Styled from './styles'

interface GroupWrapperProps {
  title?: string
  counter?: ReactNode
  className?: string
}

const GroupWrapper: React.FC<GroupWrapperProps> = ({ className, title, children, counter }) => {
  return (
    <Styled.Root className={className}>
      {(title || counter) && (
        <Styled.Title>
          {title}
          <Styled.Counter>{counter}</Styled.Counter>
        </Styled.Title>
      )}
      {children}
    </Styled.Root>
  )
}

export default GroupWrapper
