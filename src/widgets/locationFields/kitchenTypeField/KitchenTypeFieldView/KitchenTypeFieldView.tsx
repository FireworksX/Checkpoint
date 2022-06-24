import { FC, ReactNode } from 'react'
import * as Styled from './styles'

interface KitchenTypeFieldViewProps {
  className?: string
  children: ReactNode[]
}

const KitchenTypeFieldView: FC<KitchenTypeFieldViewProps> = ({ className, children }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Title>Кухня</Styled.Title>
      <Styled.Wrapper>
        {children}
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default KitchenTypeFieldView
