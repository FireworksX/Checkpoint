import { FC } from 'react'
import * as Styled from './styles'

interface TextEditorCellProps {
  before?: string
  className?: string
}

const TextEditorCell: FC<TextEditorCellProps> = ({ className, before, children }) => {
  return (
    <Styled.Root className={className}>
      {before && <Styled.Before>{before}</Styled.Before>}
      {children}
    </Styled.Root>
  )
}

export default TextEditorCell
