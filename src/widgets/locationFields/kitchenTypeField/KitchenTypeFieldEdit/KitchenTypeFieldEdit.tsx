import { FC } from 'react'
import * as Styled from './styles'
import KitchenTypeFieldCell from '../KitchenTypeFieldView/components/KitchenTypeFieldCell/KitchenTypeFieldCell'

interface KitchenTypeFieldEditProps {
  list: string[]
  onOpen(): Promise<void>
  onRemove(kitchen: string): void
  className?: string
}

const KitchenTypeFieldEdit: FC<KitchenTypeFieldEditProps> = ({ className, list, onOpen, onRemove }) => {
  return (
    <Styled.Root className={className}>
      <Styled.View>
        {list.map(el => (
          <KitchenTypeFieldCell key={el} onRemove={() => onRemove(el)}>
            {el}
          </KitchenTypeFieldCell>
        ))}
        <Styled.AppendButton mode='tertiary' onClick={onOpen}>
          + Добавить
        </Styled.AppendButton>
      </Styled.View>
    </Styled.Root>
  )
}

export default KitchenTypeFieldEdit
