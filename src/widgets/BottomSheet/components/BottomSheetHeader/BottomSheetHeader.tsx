import { FC, ReactNode } from 'react'
import * as Styled from './styles'

interface BottomSheetHeaderProps {
  left?: ReactNode
  right?: ReactNode
  className?: string
}

const BottomSheetHeader: FC<BottomSheetHeaderProps> = ({ className, left, right, children }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Left>{left}</Styled.Left>
      <Styled.Center>{children}</Styled.Center>
      <Styled.Right>{right}</Styled.Right>
    </Styled.Root>
  )
}

export default BottomSheetHeader
