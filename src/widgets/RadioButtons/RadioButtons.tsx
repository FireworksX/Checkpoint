import { FC, ReactNode } from 'react'
import * as Styled from './styles'
import { TouchableProps } from 'src/components/Touchable/Touchable'

export interface RadioButton {
  label: string
  description?: string
  isActive?: boolean
  before?: ReactNode
}

interface RadioButtonsProps extends TouchableProps {
  buttons: RadioButton[]
  className?: string
  onClick: (index: number) => any
}

const RadioButtons: FC<RadioButtonsProps> = ({ className, buttons = [], onClick }) => {
  const activeIndex = buttons.findIndex(({ isActive }) => isActive)

  return (
    <Styled.Root className={className}>
      {buttons.map((cell, index) => (
        <Styled.Cell key={`${index}_${cell.label}`} effect='none' onClick={() => onClick(index)}>
          {cell.before}
          <Styled.Body>
            <div>
              <Styled.Label>{cell.label}</Styled.Label>
              {cell.description && <Styled.Description>{cell.description}</Styled.Description>}
            </div>
            <Styled.Dot>{index === activeIndex && <Styled.DotInner />}</Styled.Dot>
          </Styled.Body>
        </Styled.Cell>
      ))}
    </Styled.Root>
  )
}

export default RadioButtons
