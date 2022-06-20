import { FC } from 'react'
import * as Styled from './styles'

interface KitchenTypeFieldViewProps {
  className?: string
  children: string[]
}

const KitchenTypeFieldView: FC<KitchenTypeFieldViewProps> = ({ className, children }) => {
  return (
    <Styled.Root className={className}>
      <Styled.Title>Кухня</Styled.Title>
      <Styled.Wrapper>
        {children.map(el => (
          <Styled.Cell key={el}>{el}</Styled.Cell>
        ))}
      </Styled.Wrapper>
    </Styled.Root>
  )
}

export default KitchenTypeFieldView
